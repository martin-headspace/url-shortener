const superagent = require('superagent')
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
    shortenURL(url) {
        superagent.post(API_FP)
            .send({url: url})
            .end((err,res)=>{
                if(err){return alert(err)}
                URLServerActions.shortenURLResponse(res)
            })
    }
    /**
     * Calls a GET Request with the minified URL to get the full version
     * @param {String} url minified URL
     */
    enlargeURL(url) {
        url = url.replace('shorty.com/','')
        superagent.get(API_FP+'?url='+url)
                .end((err,res) => {
                    if(err){
                        if(err.rawResponse !== ""){
                            URLServerActions.enlargeURLResponse(err.rawResponse)
                        } else {
                            alert(err)
                        }
                        return
                    }
                    URLServerActions.enlargeURLResponse(res)
                })
       
    }
}

export default new URLAPI()