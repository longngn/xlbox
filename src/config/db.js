import firebaseApp from './firebase'

const database = firebaseApp.database()
const messagesRef = database.ref('messages')
const messagesByTimeRef = database.ref('messages').orderByChild('timeStamp')
const usersRef = database.ref('users')

export const messageTypes = {
    TEXT: 'TEXT',
    FILE: 'FILE',
    NOTIFICATION: 'NOTIFICATION'
}

export const addMessage = (type, content, senderId) => {
    if (!content) return // if message is an empty string
    if (!/\S/.test(content)) return // if message contains only whitespaces
    
    const timeStamp = Date.now()
    const key = messagesRef.push().key
    messagesRef.update({
        [key]: {
            id: key,
            type,
            content,
            senderId,
            timeStamp
        }
    })
}

export const onMessagesDataChange = (handler) => {
    messagesByTimeRef.on('value', snapshot => {
        const messages = []
        snapshot.forEach(messageSnapshot => { messages.push(messageSnapshot.val()) })
        handler(messages)
    })
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