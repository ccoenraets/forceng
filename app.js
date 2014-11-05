angular.module('demoApp', ["controllers", "forceng"])

    .run(function ($window, force) {

// ForceNG is built to work out of the box with sensible defaults.
// Uncomment the force.init() function call below to provide specific runtime parameters
//        force.init({
//            appId: '3MVG9fMtCkV6eLheIEZplMqWfnGlf3Y.BcWdOf1qytXo9zxgbsrUbS.ExHTgUPJeb3jZeT8NYhc.hMyznKU92',
//            apiVersion: 'v32.0',
//            loginUrl: 'https://login.salesforce.com',
//            oauthRedirectURL: 'http://localhost:8200/oauthcallback.html',
//            proxyURL: 'http://localhost:8200'
//        });

    });