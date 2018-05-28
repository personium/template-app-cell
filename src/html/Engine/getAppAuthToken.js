// Login
function(request){
    try {
        personium.validateRequestMethod(["POST"], request);
    
        personium.verifyOrigin(request);

        var params = personium.parseBodyAsQuery(request);

        if (!params.p_target) {
            return {
                status : 400,
                headers : {"Content-Type":"application/json"},
                body: [JSON.stringify({"code": "400", "message": "Required paramter [p_target] missing."})]
            };
        }
        var appToken = personium.getAppToken(params.p_target);
        return personium.createResponse(200, appToken);
    } catch (e) {
        return personium.createErrorResponse(e);
    }
}

var personium = require("personium").personium;
