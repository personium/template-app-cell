# How to deploy  
We use "https://demo.personium.io/app-minimal/" in this example, but make sure you use your own Personium Cell URL.  

## Before deploying the App  
1. Join our community through [Slack](https://docs.google.com/forms/d/e/1FAIpQLSeup_VHnO09yB0r-pfQuQPSZkxZrVsisiFlSuNf0MPnUFKKGw/viewform?c=0&w=1)  
1. After your slack account is activated, please write a simple message in "demo-Cell-request" channel so that we will create a new Cell for you.  
You also need to mention that you want an app Cell, too.  
1. Once you receive your newly created app Cell, please change the password of the admin account.  

## Deploying the files  
1. Use Cell Manager to access your app Cell.  
1. From Snapshot menu, upload and then Import the [zip file](/app-minimal-clone.zip)  
You will be logged out automatically so that you will not be able to corrupt the Cell content.  
If your browser displays error message, ignore it and reload the page.
1. When the app Cell is ready, the login page will be displayed.  Re-login.  
1. Display the details of the Box - app by clicking it.  
1. Modify the schema url.  
1. Export the Box (app.bar).  
1. Upload the app.bar to the main box.  
1. Specify the app Cell URL in the following files:  
    1. launch.json  
    This information is used by the HomeApp to lauch your app.  
        - Before:  

                {
                  "personal": {
                     "web": "https://***/***/__/html/app.html",
                     "android": "***:",
                     "ios": "***:"
                  }
                }

        - After (example):  

                {
                  "personal": {
                     "web": "https://demo.personium.io/app-minimal/__/html/app.html",
                     "android": "MinimalApp:",
                     "ios": "MinimalApp:"
                  }
                }

    1. main/html/Engine/__src/acc_info.js  
    This is the file that all other Engine Script refers to when authentication is needed.  
    Double check that the Engine Service's ACL is configured to all exec (not all read) to avoid showing the ID/Password in this file. 

            /*
             * Begin of your Personium app configurations
             */
            var appCellUrl = '***'; // for example: https://demo.personium.io/appCellName/ or https://appCellName.demo.personium.io/
            var appUserId = 'tokenAcc';
            var appUserPass = '***';
            /*
             * End of your Personium app configurations
             */
