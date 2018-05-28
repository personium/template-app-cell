// Login
function(request){
    try {
        personium.validateRequestMethod(["POST"], request);
        personium.verifyOrigin(request);
        
        var params = personium.parseQuery(request);
        if (!params.cellUrl) {
            return {
                status : 400,
                headers : {"Content-Type":"application/json"},
                body: [JSON.stringify({"code": "400", "message": "Required paramter [cellUrl] missing."})]
            };
        }

        var state = [moment().valueOf(), "-per"].join('');
        var setCookieStr = createCookie(state);
        var redirectUrl = getRedirectUrl(params.cellUrl, state);

        return {
            status : 303,
            headers: {
                "Location": redirectUrl,
                "Set-Cookie": setCookieStr
            },
            body : []
        };
    } catch(e) {
        return personium.createErrorResponse(e);
    }
}

function createCookie(state) {
    var shaObj = new jsSHA(state, "ASCII");
    var hash = shaObj.getHash("SHA-512", "HEX");
    var cookieStr = ['personium', '=', hash].join('');

    return cookieStr;
};

function getRedirectUrl(cellUrl, state) {
    var appCellUrl = personium.getAppCellUrl();
    var redirectUri = appCellUrl + '__/html/Engine/receive_redirect?cellUrl=' + cellUrl;
    var paramsStr = [
        'response_type=code',
        'client_id=' + encodeURIComponent(appCellUrl),
        'redirect_uri=' + encodeURIComponent(redirectUri),
        'state=' + encodeURIComponent(state)
    ].join('&');
    
    return [cellUrl, "__authz?", paramsStr].join('');
};

var personium = require("personium").personium;
var jsSHA = require("sha_dev2").jsSHA;
var moment = require("moment").moment;
