import URLAPI from '../utils/index'
var AppDispatcher = require('../dispatchers/AppDispatcher')
var URLConstants = require('../constants/URLConstants')

class UAC { 
    /**
     * Receives a signal from the dispatcher to enlarge an URL from it's minified form
     * @param {String} url as a minified URL 
     */
    enlargeURL(url){
        AppDispatcher.handleEnlargeAction({
            actionType: URLConstants.ENLARGE_URL
        })
        URLAPI.enlargeURL(url)
    }

    /**
     * Receives a signal from the dispatcher to shorten an URL from its complete form
     * @param {String} url  as a full URL
     */
    shortenURL(url) {
        AppDispatcher.handleShortenAction({
            actionType: URLConstants.SHORTEN_URL
        })
        URLAPI.shortenURL(url)
    }
}