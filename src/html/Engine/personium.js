exports.personium = (function() {
    var personium = personium || {};
    var _allowedKeys = [];
    var _requiredKeys = [];
    var _appCellAdminInfo = {
        cellUrl : "***",
        userId : "***",
        password: "***" 
    };
    var _ = require("underscore")._;

    personium.setAppCellAdminInfo = function(tempInfo) {
        _appCellAdminInfo = tempInfo;
    };

    personium.getAppCellAdminInfo = function() {
        return _appCellAdminInfo;
    };

    personium.getAppToken = function(p_target) {
        var ret;
        var appCell = _p.as(_appCellAdminInfo).cell(p_target);
        ret = appCell.getToken();
        return ret;
    };

    personium.getUserCell = function(accInfo, cellname) {
        return _p.as(accInfo).cell(cellname);
    };

    personium.getUserCellMainBox = function(accInfo, cellname){
        return _p.as(accInfo).cell(cellname).box("__");
    };

    personium.validateRequestMethod = function(supportedMethods, request) {
        if (_.contains(supportedMethods, request.method)) {
            return true;
        } else {
            var err = [
                "io.personium.client.DaoException: 405,",
                JSON.stringify({
                    "code": "PR405-MC-0001",
                    "message": {
                        "lang": "en",
                        "value": "Method not allowed."
                    }
                })
            ].join("");
            throw new _p.PersoniumException(err);
        }
    };

    personium.parseQuery = function(request) {
        var queryString = request.queryString;
        var query = _p.util.queryParse(queryString);
        return query;
    };

    personium.parseBody = function(request) {
        var bodyAsString = request["input"].readAll();
        if (_.isEmpty(bodyAsString)) {
            var err = [
                "io.personium.client.DaoException: 400,",
                JSON.stringify({
                    "code": "PR400-OD-0006",
                    "message": {
                        "lang": "en",
                        "value": "Request body is empty."
                    }
                })
            ].join("");
            throw new _p.PersoniumException(err);
        }
        return JSON.parse(bodyAsString);
    };
    
    personium.setAllowedKeys = function(tempArray) {
        _allowedKeys = tempArray;
    };
    
    personium.getAllowedKeys = function() {
        return _allowedKeys;
    };
    
    personium.setRequiredKeys = function(tempArray) {
        _requiredKeys = tempArray;
    };
    
    personium.getRequiredKeys = function() {
        return _requiredKeys;
    };
    
    /* 
     * Validate all keys according to the following rules.
     * 1. whether it is included in params
     * 2. whether its value is undefined
     * 3. whether its value is null
     */
    personium.validateKeys = function(params) {
        var invalidParams = _.omit(params, _allowedKeys);
        if (_.isEmpty(invalidParams)) {
            // if _requiredKeys is empty, hasRequiredInfo will be true.
            var hasRequiredInfo = _.every(
                _requiredKeys,
                function(element, index, list){
                    return _.has(params, element) && !_.isUndefined(params[element]) && params[element] !== "undefined" && !_.isNull(params[element]);
                }
            );
            
            if (hasRequiredInfo) {
                return true;
            } else {
                var err = [
                    "io.personium.client.DaoException: 400,",
                    JSON.stringify({
                        "code": "PR400-CM-0001",
                        "message": {
                            "lang": "en",
                            "value": "Required key missing or value is null."
                        }
                    })
                ].join("");
                throw new _p.PersoniumException(err);
            }
        } else {
            var invalidKeys = _.keys(invalidParams);
            var err = [
                "io.personium.client.DaoException: 400,",
                JSON.stringify({
                    "code": "PR400-OD-0014",
                    "message": {
                        "lang": "en",
                        "value": "Unknown property was appointed."
                    },
                    "data": invalidKeys
                })
            ].join("");
            throw new _p.PersoniumException(err);
        }
    };

    personium.httpPOSTMethod = function (url, headers, contentType, body) {
        var httpClient = new _p.extension.HttpClient();
        var response = httpClient.post(url, headers, contentType, body);
        var httpCode = parseInt(response.status);
        if (httpCode === 500) {
            // retry
            var ignoreVerification = {"IgnoreHostnameVerification": true};
            httpClient = new _p.extension.HttpClient(ignoreVerification);
            response = httpClient.post(url, headers, contentType, body);
            httpCode = parseInt(response.status);
        }
        if (httpCode !== 200) {
            // Personium exception
            var err = [
                "io.personium.client.DaoException: ",
                httpCode,
                ",",
                response.body
            ].join("");
            throw new _p.PersoniumException(err);
        }
        return JSON.parse(response.body);
    };

    /*
     * There is no way to differentiate system error or Personium Exception.
     * Therefore, we try to check if e.message is JSON (Personium Exception) or not.
     */
    personium.createErrorResponse = function(e) {
        var tempErrorCode = e.code;
        // System error
        if (_.isError(e)) {
            return personium.createResponse(500, e);
        }

        var tempErrorMessage;
        try {
            // Convert to JSON so that response header can be properly configured ("Content-Type":"application/json").
            tempErrorMessage = JSON.parse(e.message);
        } catch(e) {
            tempErrorMessage = e.message;
        }
        if (_.isUndefined(tempErrorCode) || _.isNull(tempErrorCode) || tempErrorCode == 0) {
            return personium.createResponse(500, tempErrorMessage);
        }
        
        return personium.createResponse(tempErrorCode, tempErrorMessage);
    };
    
    personium.createResponse = function(tempCode, tempBody) {
        var isString = typeof tempBody == "string";
        var tempHeaders = isString ? {"Content-Type":"text/plain"} : {"Content-Type":"application/json"};
        return {
            status: tempCode,
            headers: tempHeaders,
            body: [isString ? tempBody : JSON.stringify(tempBody)]
        };
    };
    
    return personium;
}());
