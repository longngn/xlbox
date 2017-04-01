import React from 'react'
import styles from './styles.css'

export default ({ children, color, backgroundColor }) => {
    color = color || 'black'
    backgroundColor = backgroundColor || '#EEE'
    return (
        <div className={styles.messageBubble} style={{ color, backgroundColor }}>
            <p className={styles.messageText}>{children}</p>
        </div>
    )
}