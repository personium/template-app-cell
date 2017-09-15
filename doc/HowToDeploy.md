# How to deploy
1. Contact the Pesonium team and the followings will be created for you.  
You need to tell us the cell name (in this tutorial we use "app-minimal") first.  
    1. App cell  
    1. Administrative account for the app cell
    1. App cell account  
    Usually you can reuse the same user name and password from launch.json.  

            {
              "personal": {
                 ...
                 "appTokenId": "tokenAcc",
                 "appTokenPw": "personiumtoken"
              }
            }

1. Once you receive your newly created app cell, specify the cell URL for the followings:  
    1. 00_manifest.json  
    This information is used when installing your app's box.  
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
                  "schema": "https://demo.personium.io/app-minimal/"
                }

    1. launch.json  
    This information is used by the HomeApp to lauch your app.  
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
                     "android": "MinimalApp:",
                     "ios": "MinimalApp:",
                     "appTokenId": "tokenAcc",
                     "appTokenPw": "personiumtoken"
                  }
                }

    1. app.js  
    Internal APIs in common.js or common_personium.js refers to the cell URL to perform all sorts of operations.  
        - Before:  

                const APP_URL = "https://***/***/";

        - After (example):  

                const APP_URL = "https://demo.personium.io/app-minimal/";

1. Create a bar file (zip format).  
Example: app-minimal.bar  
1. Upload files (see the diagram below) to the app cell's main box.  
If you don't have access to the CellManager, please contact the Personium team.  
![Main box of MinimalApp](MinimalApp_MainBox.png)  
1. Add your app to the App Market.  
You need to provide the following information to the Personium team.  

        {
            "BarUrl":"__/app-minimal.bar",
            "SchemaUrl":"https://demo.personium.io/app-minimal/",
            "BoxName":"io_personium_demo_app-minimal"
        }

1. Once the Personium team has approved your app which will be available in the App Market, you can login to your other account and install your app on to your cell.  
