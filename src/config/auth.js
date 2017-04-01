import * as firebase from 'firebase'
import firebaseApp from './firebase'
import 'isomorphic-fetch'

const getProfileURL = async (providerId, uid) => {
    switch (providerId) {
        case 'facebook.com':
            return `https://www.facebook.com/${uid}`
        case 'google.com':
            return `https://plus.google.com/${uid}`
        case 'github.com':
            const response = await fetch(`https://api.github.com/user/${uid}`)
            const data = await response.json()
            return data.html_url
        default:
    }
}

// Convert from complex Firebase's User model to a simpler model:
// User {
//     id,
//     displayName,
//     avatarURL,
//     profileURL
// }
export const onAuthStateChange = (handler) => 
    firebase.auth().onAuthStateChanged(user => {
        if (user) getProfileURL(user.providerData[0].providerId, user.providerData[0].uid)
            .then(profileURL => {
                handler({
                    id: user.uid,
                    displayName: user.displayName,
                    avatarURL: user.photoURL,
                    profileURL
                })
            })
        else handler(null)
})

export const logInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    await firebaseApp.auth().signInWithPopup(provider)
}

export const logInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebaseApp.auth().signInWithPopup(provider)
}

export const logInWithGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    await firebaseApp.auth().signInWithPopup(provider)
}

export const logOut = async () => {
    await firebaseApp.auth().signOut()
}