var AppDispatcher = require('../dispatchers/AppDispatcher')
var URLConstants = require('../constants/URLConstants')
var ObjectAssign = require('object-assign')
var EventEmitter = require('events').EventEmitter

// Set a CHANGE_EVENT Constant for any changes in the store
var CHANGE_EVENT = 'change'

var _store = {
    url: ''
}

/**
 * Create Store functions
 */
var URLStore = ObjectAssign({}, EventEmitter.prototype,{
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT,cb)
    },
    removeChangeListener: function(cb){
        this.on(CHANGE_EVENT,cb)
    },
    getURL: function() {
        return _store.url
    }
})

/**
 * Register and Call functions on the Dispatcher
 */
AppDispatcher.register(function(payload){
    var action = payload.action
    switch(action.actionType){
        case URLConstants.SHORTEN_URL:
            // URLStore.emit(CHANGE_EVENT)
            break
        case URLConstants.SHORTEN_URL_RESPONSE:
            _store.url = action.response.body.body
            URLStore.emit(CHANGE_EVENT)
            break
        case URLConstants.ENLARGE_URL:
            // URLStore.emit(CHANGE_EVENT)
            break
        case URLConstants.ENLARGE_URL_RESPONSE:
            _store.url = action.response
            URLStore.emit(CHANGE_EVENT)
            break
        default:
            console.error('Unexpected function at URL Store')
            URLStore.emit(CHANGE_EVENT)
    }
})

module.exports = URLStore