import React from 'react'
import styles from './MessageBubble.css'

import flatMap from 'lodash/flatMap'

export default ({ children, color, backgroundColor }) => {
    color = color || 'black'
    backgroundColor = backgroundColor || '#EEE'
    if (typeof(children) === 'string') {
        children = children.split('\n')
        children = flatMap(children, (line, index, array) => 
            index < array.length - 1 ? [line, <br />] : line
        )
    }

    return (
        <div className={styles.bubble} style={{ color, backgroundColor }}>
            <p className={styles.text}>{children}</p>
        </div>
    )
}
