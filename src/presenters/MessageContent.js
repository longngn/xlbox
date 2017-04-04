import React from 'react'
import MessageBubble from './MessageBubble'
import styles from './MessageBubble.css'
import colors from '../config/colors'

export const Text = ({ children, isOwned }) => isOwned?
    <MessageBubble 
        backgroundColor={colors.ownedMessage}
        color='#fff'
    >{children}</MessageBubble> :
    <MessageBubble 
        backgroundColor={colors.unownedMessage}
        color='#000'
    >{children}</MessageBubble>

export const File = ({ isOwned, file }) => {
    if (file.type.startsWith('image')) return (
        <a href={file.downloadURL}>
            <img className={styles.image} src={file.downloadURL} alt={file.name}/>
        </a>
    )
    return (
        <Text isOwned={isOwned}>
            <a href={file.downloadURL}>
                <i className='fa fa-cloud-download'></i>
                {' '}
                {file.name}
            </a>
        </Text>
    )
}