# Description  
This repository contains the necessary files (HTML, CSS, JavaScript) needed to create a very simple Personium App which runs on the HomeApp.

All you need to do is import it to your project and start filling in the missing information marked by "***" within this repository.  

# Folder structure  

    │  app-minimal.bar
    │  launch.json
    │  profile.json
    │  relations.json
    │  roles.json
    │  
    ├─bar
    │  └─00_meta
    │          00_manifest.json
    │          90_rootprops.xml
    │          
    ├─doc
    │      
    ├─icon
    │      
    ├─locales
    │  ├─en
    │  │      profile.json
    │  │      
    │  └─ja
    │          profile.json
    │          
    └─src
        └─html
            │  app.html
            │  
            ├─css
            │      common.css
            │      
            ├─Engine
            │      getAppAuthToken.js
            │      
            ├─img
            │      github.png
            │      
            ├─js
            │      app.js
            │      common.js
            │      common_personium.js
            │      
            └─locales
                ├─en
                │      common.json
                │      glossary.json
                │      
                └─ja
                        common.json
                        glossary.json

# How to deploy  
Take a look at the guide on [How to deploy](doc/HowToDeploy.md) the minimal App.  

# How to customize the App  
Fell free to use this App as the base and write your own App. Basically, you can reuse files that contain "common" in their file names. Check [here](doc/Customizations.md) for detailed instructions.  

# How to Install the App  
Take a look at the guide on [How to Install](doc/HowToInstallApp.md) the minimal App.

# Tips  
Some [tips](doc/Tips.md) on using i18next & Google API.    

