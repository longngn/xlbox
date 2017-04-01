import firebaseApp from './firebase'

const database = firebaseApp.database()
const messagesRef = database.ref('messages')
const usersRef = database.ref('users')

export const addMessage = (message, senderId) => {
    if (!message) return // if message is an empty string
    if (!/\S/.test(message)) return // if message contains only whitespaces
    
    const timeStamp = new Date().toLocaleString('vi-VI')
    const key = messagesRef.push().key
    messagesRef.update({
        [key]: {
            id: key,
            message,
            senderId,
            timeStamp
        }
    })
}

export const onMessagesDataChange = (handler) => {
    messagesRef.on('value', snapshot => 
        handler(Object.values(snapshot.val() || {}))
    )
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