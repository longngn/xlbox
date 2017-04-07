import firebase from 'firebase'
import firebaseApp from './firebase'

const database = firebaseApp.database()
const messagesRef = database.ref('messages')
const visibleMessagesRef = database.ref('messages').orderByChild('timestamp').limitToLast(100)
const usersRef = database.ref('users')

export const messageTypes = {
    TEXT: 'TEXT',
    FILE: 'FILE',
    NOTIFICATION: 'NOTIFICATION'
}

export const addMessage = async (type, content, senderId) => {
    if (!content) return // if message is an empty string
    if (!/\S/.test(content)) return // if message contains only whitespaces
    
    const key = messagesRef.push().key
    const timestamp = firebase.database.ServerValue.TIMESTAMP
    messagesRef.update({
        [key]: {
            id: key,
            type,
            content,
            senderId,
            timestamp
        }
    })
}

export const onMessagesDataChange = (handler) => {
    visibleMessagesRef.on('value', snapshot => {
        const messages = []
        snapshot.forEach(messageSnapshot => { messages.push(messageSnapshot.val()) })
        handler(messages)
    })
}

export const onNewMessage = (handler) => {
    messagesRef.on('child_added', snapshot => handler(snapshot.val()))
}

export const updateUser = (user) => {
    usersRef.update({
        [user.id]: user
    })
}

export const getUser = async (id) => {
    const snapshot = await usersRef.child(id).once('value')
    return snapshot.val()
}

export const onUsersDataChange = (handler) => {
    usersRef.on('value', snapshot =>
        handler(snapshot.val())
    )
}