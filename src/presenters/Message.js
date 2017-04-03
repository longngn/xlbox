import React from 'react'
import Avatar from 'material-ui/Avatar'
import * as MessageContent from './MessageContent';
import styles from './Message.css'

export default ({ message, user, isOwned }) => {
    let messageContent 
    switch (message.type) {
        case 'TEXT':
            messageContent = <MessageContent.Text isOwned={isOwned}>{message.content}</MessageContent.Text>
            break
        case 'FILE':
            messageContent = <MessageContent.File isOwned={isOwned} file={message.content} />
            break
        default:
            messageContent = <div>{`Undefined message type: ${message.type}`}</div>
    }

    return isOwned ? (
        <div className={styles.ownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.ownedMessage}>
                <p className={styles.userName}>{user.displayName}</p>
                {messageContent}
            </div>
        </div>
    ) : (
        <div className={styles.unownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.unownedMessage}>
                <p className={styles.userName}>{user.displayName}</p>
                {messageContent}
            </div>
        </div>
    )
}