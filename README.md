# Description  
This repository contains the necessary files (HTML, CSS, JavaScript) needed to create a very simple Personium app which can be launched from the HomeApp.

All you need to do is follow the instructions in the tutorial to configure your app Cell and upload the files (see below) that contain appropriate information (information marked by "***" within this repository)of your app Cell.  

# Files to be modified and upload to your app Cell    

    │  launch.json (must use the current app Cell URL)
    │  profile.json (must use your App name and icon)
    │  
    │      
    ├─locales
    │  ├─en
    │  │      profile.json  (must use your app name and icon)
    │  │      
    │  └─ja
    │         profile.json  (must use your app name and icon)
    │          
    └─src
        └─html
            │  
            ├─Engine
            │      acc_info.js (must use your app Cell's information)
            │      
            └─js
                   app.js (must use the current App Cell URL)



# Tutorial  
Follow the steps below to create, customize and install your first Personium app.Then, experience
1. How to deploy  
Take a look at the guide on [How to deploy](doc/HowToDeploy.md) the minimal app.  

1. How to customize the app  
Feel free to use this app as the base and write your own app. Basically, you can reuse files that contain "common" in their file names. Check [here](doc/Customizations.md) for detailed instructions.  

1. How to Install the app  
Take a look at the guide on [How to Install](doc/HowToInstallApp.md) the Minimal App.

1. How to debug the app  
Install Restlet Client in Chrome and import the [scenario](doc/Personium_Mokumoku3.json). Fill in your app Cell information in Environment variables.  

# Tips  
Some [tips](doc/Tips.md) on using i18next & Google API.    
