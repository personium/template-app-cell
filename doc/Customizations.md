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
