# drupal_maf_copy
Drupal module for interacting with the Maf Copy to test script

This module is a frontend for the commandline script [maf-copy](https://github.com/CiviCooP/maf_copy)

**Usage instruction**

When you have the permission you could go to Configuration --> Maf and select either Backup or Copy to test
As soon as you click Start Backup or Copy to test the script will start to run on the server and the output of the script will be shown in the webpage.

**Installation instruction**

* Install the [maf-copy](https://github.com/CiviCooP/maf_copy) from https://github.com/CiviCooP/maf_copy on the server
* Also follow the setup instructions for the maf-copy script
* Install this module within drupal
* Set the permission 'create backups' and 'copy to test' in Drupal
