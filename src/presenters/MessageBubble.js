import React from 'react'
import styles from './MessageBubble.css'

export default ({ children, color, backgroundColor }) => {
    color = color || 'black'
    backgroundColor = backgroundColor || '#EEE'
    return (
        <div className={styles.bubble} style={{ color, backgroundColor }}>
            <p className={styles.text}>{children}</p>
        </div>
    )
}
