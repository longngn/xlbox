import React from 'react'
import Avatar from 'material-ui/Avatar'
import * as MessageContent from './MessageContent';
import styles from './Message.css'

export default ({ message, user, isOwned }) => {
    return isOwned ? (
        <div className={styles.ownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.ownedMessage}>
                <p className={styles.userName}>{user.displayName}</p>
                <MessageContent.Text isOwned={isOwned}>{message}</MessageContent.Text>
            </div>
        </div>
    ) : (
        <div className={styles.unownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.unownedMessage}>
                <p className={styles.userName}>{user.displayName}</p>
                <MessageContent.Text isOwned={isOwned}>{message}</MessageContent.Text>
            </div>
        </div>
    )
}