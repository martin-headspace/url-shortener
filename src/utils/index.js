var axios = require('axios')
var URLServerActions = require('../actions/URLServerActions')

const API_FP = 'https://y1hibagjj8.execute-api.us-east-1.amazonaws.com/Prod'

/**
 * URL API to connect to API Gateway
 */
class URLAPI {
    /**
     * Calls a POST Request with the URL to request a minified version of it
     * @param {String} url full URL
     */
    async shortenURL(url) {
        try {
            const response = await axios.post(API_FP,{
                url: url
            })
            URLServerActions.shortenURLResponse(response.body)
        } catch(error) {
            alert(JSON.stringify(error))
        }
    }
    /**
     * Calls a GET Request with the minified URL to get the full version
     * @param {String} url minified URL
     */
    async enlargeURL(url) {
        url = url.replace('shorty.com/','')
        try {
            const response = await axios.get(API_FP+'/?url='+url)
            URLServerActions.enlargeURLResponse(response)
        } catch(error) {
            alert(JSON.stringify(error))
        }
    }
}

export default new URLAPI()