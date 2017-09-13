# Description  
This repository contains the necessary files (HTML, CSS, JavaScript) needed to create a very simple Personium app which runs on the HomeApp.

All you need to do is import it to your project and start filling in the missing information marked by "***" within this repository.  

# Folder structure  

    Z:.
    │  launch.json
    │  LICENSE
    │  profile.json
    │  README.md
    │  temp.txt
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
1. Get a cell from the Personium team.  
Specify the cell URL for the followings:  
    1. 00_manifest.json  
    [DefaultPath is not implemented yet](https://github.com/personium/personium-core/issues/51), therefore, no need to change it.
        - Before:  

                {
                  "bar_version": "1",
                  "box_version": "1",
                  "DefaultPath": "NotImplemented",
                  "schema": "https://demo.personium.io/***/"
                }

        - After:  

                {
                  "bar_version": "1",
                  "box_version": "1",
                  "DefaultPath": "NotImplemented",
                  "schema": "https://demo.personium.io/app-mininal/"
                }

    1. launch.json  
        - Before:  

                {
                  "personal": {
                     "web": "https://***/***/__/src/app.html",
                     "android": "***:",
                     "ios": "***:",
                     "appTokenId": "tokenAcc",
                     "appTokenPw": "personiumtoken"
                  }
                }

        - After (example):  

                {
                  "personal": {
                     "web": "https://demo.personium.io/app-minimal/__/src/app.html",
                     "android": "***:",
                     "ios": "***:",
                     "appTokenId": "tokenAcc",
                     "appTokenPw": "personiumtoken"
                  }
                }

    1. app.js  
    App is running on the following URL.  
        - Before:  

                const APP_URL = "https://***/***/";

        - After (example):  

                const APP_URL = "https://demo.personium.io/app-minimal/";

1. Create a bar file.  
Example: app-minimal.bar  
1. Upload files to the app cell's main box.  
1. Add your app to the App Market.  
You need to provide the following information to the Personium team.  

        {
            "BarUrl":"__/app-minimal.bar",
            "SchemaUrl":"https://demo.personium.io/app-minimal/",
            "BoxName":"io_personium_demo_app-minimal"
        }

1. Once the Personium team has approved your app which will be available in the App Market, you can login to your other account and install your app on to your cell.  

# Customizations  
You are free to use this app as base and write your own.  Basically, we reuse files that contain the "common" in their file names for all other apps. And then we edit the following constants/functions to match our needs.  

## Edit the profile.json  
1. Edit your app's profile.  
Currently we are bilingual (English/Japan).  
    - Before: 

            {
                "DisplayName": {"en": "***", "ja": "***"},
                "Description": {"en": "***", "ja": "***"},
                ...
                "CellType": "App"
            }

    - After:  

            {
                "DisplayName": {"en": "***", "ja": "***"},
                "Description": {"en": "***", "ja": "***"},
                ...
                "CellType": "App"
            }

1. Change your app's icon.  
TBD  

## Customizing app.js  
### Functions used by common.js  

1. All the JSON files inside locales/en.  

        getNamesapces = function() {
            return ['common', 'glossary'];
        };

1. After i18next has prepare all the necessary information, it will call the following function which configure and render your app.  

        additionalCallback = function() {
            ...
        }

1. When the app encounter an error which prevent it from working properly, it will display a warning dialog to notify the user to close the browser window.  
Before the dialog is displayed, your might want to hide some GUI components so that the user will not accidentally click on it.   

        irrecoverableErrorHandler = function() {
            ...
        }

1. After you click the warning dialog's "OK" button, you might want to clean up your browser session before closing the window.  

        cleanUpData = function() {
            ...
        }

### Functions used by common_personium.js  
This demo does not require you to implement the following functions.  
For reference, you can check out [MyBoard](https://github.com/personium/app-myboard)  

1. Relation defined bar/00_meta/10_relations.json  

        getAppReadRelation = function() {
            return '***';
        }

1. File location where your app stores information.  

        getAppDataPath = function() {
            return '***';
        }

1. AJAX option for getting data.  

        getAppRequestInfo = function() {
            ...
        }
        
# Tips  
1. QR code image  
Create an img tag on the fly using jQuery.  

        createQRCodeImg = function(url) {
            let googleAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=177x177&chl=';
            let qrURL = googleAPI + url;
            let aDiv = $('<div>').append(
                '<br>',
                $('<img>', {
                    src: qrURL,
                    alt: url,
                    style: 'width: 200px; height: 200px'
                })
            );
            return aDiv;
        };
