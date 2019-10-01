var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()
var URLConstants = require('../constants/URLConstants')

/**
 * App Dispatcher to enlarge an URL
 */
 AppDispatcher.enlargeURL = function(action){
    this.dispatch({
        source: URLConstants.ENLARGE_URL,
        action: action
    })
 }

 /**
 * App Dispatcher to shorten an URL
 */
 AppDispatcher.shortenURL = function(action) {
     this.dispatch({
         source: URLConstants.SHORTEN_URL,
         action: action
     })
 }

 /**
 * App Dispatcher to receive an enlarge call response
 */
 AppDispatcher.enlargeURLResponse = function(action) {
     this.dispatch({
         source: URLConstants.ENLARGE_URL_RESPONSE,
         action: action
     })
 }

 /**
 * App Dispatcher to receive a shorten call response
 */
 AppDispatcher.shortenURLResponse = function(action) {
     this.dispatch({
         source: URLConstants.SHORTEN_URL_RESPONSE,
         action: action
     })
 }