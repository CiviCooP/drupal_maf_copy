(function ($) {
    var DrupalMafCopy_i = 0;

    function DrupalMafCopy_Copy() {
        i = 0;
        $('#backup_output').css('display', 'block');
        $('#runBackup').css('display', 'none');
        jQuery.ajax({
            type: 'GET',
            url: '/admin/config/maf/copy_to_test/run',
            success: DrupalMafCopy_CopyStarted,
            dataType: 'json'
        });
    }

    function DrupalMafCopy_CopyStarted(data) {
        $('#backup_output').html(data.output);
        if (data.running) {
            $('#backup_output').append('<br><br>Running');
            for (j=0; j<DrupalMafCopy_i; j++) {
                $('#backup_output').append('.');
            }
            DrupalMafCopy_i++;
            if (DrupalMafCopy_i>3) {
                DrupalMafCopy_i = 0;
            }

            var timer = window.setInterval(function() {
                window.clearTimeout(timer);


                    jQuery.ajax({
                        type: 'GET',
                        url: '/admin/config/maf/copy_to_test/run?only_check=1',
                        success: DrupalMafCopy_CopyStarted,
                        dataType: 'json'
                    });
            }, 1000);
        } else {
            $('#backup_output').append('<br><br>Finished');
            $('#runBackup').css('display', 'block');
        }
    }

    DrupalMafCopy_Copy();

})(jQuery);


