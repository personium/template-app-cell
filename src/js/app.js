const APP_URL = "https://***/***/";

getNamesapces = function() {
    return ['common', 'glossary'];
};

additionalCallback = function() {
    Common.setAppCellUrl();

    Common.setAccessData();

    if (!Common.checkParam()) {
        // cannot do anything to recover
        // display a dialog and close the app.
        return;
    };

    Common.setIdleTime();

    Common.getProfileName(Common.getCellUrl(), displayMyDisplayName);
};

displayMyDisplayName = function(extUrl, dispName) {
    $("#dispName")
        .attr("data-i18n", "[html]glossary:msg.info.description")
        .localize({
            "name": dispName
        });
};
