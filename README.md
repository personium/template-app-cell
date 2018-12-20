# Description  
This repository contains the necessary files (HTML, CSS, JavaScript) needed to create a very simple Personium app which can be launched from the HomeApp.

All you need to do is follow the instructions in the tutorial to import configuration to your app Cell and upload the files (see below) that contain appropriate information (information marked by "***" within this repository)of your app Cell.  

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


# Before you start  
Either perform the tutorial using our demo environment (demo.personium.io) or make sure you have Unit Admin level permission over your app Cell.  

Due to current implemetation of Personium Core, the followings will happen and require you to re-login as Unit Admin.  

1. The app Cell's user account will be overwritten with random password when importing a Cell from another Personium Unit.  
1. Unit/Cell Manager will be logged out automatically after importing a Cell.  

## How to get an app Cell from us  
1. Join our community through [Slack](https://docs.google.com/forms/d/e/1FAIpQLSeup_VHnO09yB0r-pfQuQPSZkxZrVsisiFlSuNf0MPnUFKKGw/viewform?c=0&w=1)  
1. After your slack account is activated, please write a simple message in "demo-Cell-request" channel so that we will create a new Cell for you.  
You also need to mention that you want an app Cell, too.  
1. Once you receive your newly created app Cell, please change the password of the admin account.  

# Tutorial  
Follow the steps below to create, customize and install your first Personium app.  

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
