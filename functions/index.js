const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.getTimestamp = functions.https.onRequest((req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).json({
        timestamp: Date.now()
    })
})
