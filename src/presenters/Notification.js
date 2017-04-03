import React from 'react'
import Avatar from 'material-ui/Avatar'
import styles from './Notification.css'

export default ({ user, message }) => (
    <div className={styles.container}>
        <a href={user.profileURL}>
            <Avatar src={user.avatarURL} size={30}/>
        </a>
        <p className={styles.message}>
            <a className={styles.userLink} href={user.profileURL}>{user.displayName}</a>
            {message}
        </p>
    </div>
)