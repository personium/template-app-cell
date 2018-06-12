const APP_URL = "https://demo.personium.io/app-minimal/";

getEngineEndPoint = function() {
    return Common.getAppCellUrl() + "__/html/Engine/getAppAuthToken";
};

getStartOAuth2EngineEndPoint = function() {
    return Common.getAppCellUrl() + "__/html/Engine/start_personium_oauth2";
};

getNamesapces = function() {
    return ['common', 'glossary'];
};

additionalCallback = function() {
    Common.setIdleTime();

    Common.getProfileName(Common.getCellUrl(), displayMyDisplayName);
};

displayMyDisplayName = function(extUrl, dispName) {
    $("#dispName")
        .attr("data-i18n", "[html]glossary:msg.info.description")
        .localize({
            "name": dispName
        });

    $('body > div.mySpinner').hide();
    $('body > div.myHiddenDiv').show();
};
