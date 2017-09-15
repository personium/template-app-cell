# Description  
This repository contains the necessary files (HTML, CSS, JavaScript) needed to create a very simple Personium app which runs on the HomeApp.

All you need to do is import it to your project and start filling in the missing information marked by "***" within this repository.  

# Folder structure  

    Z:.
    │  app-minimal.bar
    │  launch.json
    │  LICENSE
    │  profile.json
    │  README.md
    │  
    ├─bar
    │  └─00_meta
    │          00_manifest.json
    │          90_rootprops.xml
    │          
    ├─icon
    │      icon.png
    │      
    └─src
        │  app.html
        │  
        ├─css
        │      common.css
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
Take a look at the guide on [How to deploy](doc/HowToDeploy.md) the minimal app.  

# How to customize the app  
Fell free to use this app as the base and write your own app. Basically, you can reuse files that contain "common" in their file names. Check [here](doc/Customizations.md) for detailed instructions.  

# Tips  
Some [tips](doc/Tips.md) on using i18next & Google API.    

