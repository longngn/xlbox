var functions = require('firebase-functions');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })

exports.addTimestamp = functions.database.ref('messages/{messageId}/content')
    .onWrite(event => {
        return event.data.ref.parent.child('timestamp').set(Date.now())
    })
    