# protractor-pom-gulp

## Technologies:

Project is created with:
  * Protractor
  * Gulp
  * Webdriver-manager

## The project can be run in x different ways:
  ##### 1.- With Protractor
  ```bash
  protractor protractor.conf.js --params.suite="holland"
  ```
  The __--params.suite__ values can be *"holland"* or *"seabourn"*. It is optional to set __--spec__ here or use the ones defined in the *protractor.conf.js* file

  ##### 2.- With Gulp
  ```bash
  //optional to set --spec here or use the ones defined in the protractor.conf.js file
  gulp protractor-run --params.suite="holland"
  ```
  The __--params.suite__ values can be *"holland"* or *"seabourn"*. It is optional to set __--spec__ here or use the ones defined in the *protractor.conf.js* file