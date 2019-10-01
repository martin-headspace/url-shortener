var AppDispatcher = require('../dispatchers/AppDispatcher')
var URLConstants = require('../constants/URLConstants')


module.exports = {
    /**
     * Receives the response from the API Call to enlarge an URL
     * @param {URL} response with the original URL
     */
    enlargeURLResponse : function(response) {
        AppDispatcher.handleEnlargeURLServer({
            actionType: URLConstants.ENLARGE_URL_RESPONSE,
            response: response
        })
    },
    /**
     * Receives the response from the API call to shorten an URL
     * @param {URL} response minified URL version of the original
     */
    shortenURLResponse : function(response) {
        AppDispatcher.handleShortenURLServer({
            actionType: URLConstants.SHORTEN_URL_RESPONSE,
            response: response
        })
    }
}