import React from 'react'
import MessageBubble from './MessageBubble'
import Avatar from 'material-ui/Avatar'
import styles from './MessageGroup.css'
import colors from '../config/colors'

export default ({ message, user, isOwned }) => {
    return isOwned ? (
        <div className={styles.ownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.ownedMessages}>
                <p className={styles.userName}>{user.displayName}</p>
                <MessageBubble 
                    backgroundColor={colors.ownedMessage}
                    color='#fff'
                >{message}</MessageBubble>
            </div>
        </div>
    ) : (
        <div className={styles.unownedContainer}>
            <a href={user.profileURL}>
                <Avatar src={user.avatarURL} />
            </a>
            <div className={styles.unownedMessages}>
                <p className={styles.userName}>{user.displayName}</p>
                <MessageBubble 
                    backgroundColor={colors.unownedMessage}
                    color='#000'
                >{message}</MessageBubble>
            </div>
        </div>
    )
}