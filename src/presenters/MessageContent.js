import React from 'react'
import MessageBubble from './MessageBubble'
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

export const File = ({ isOwned, file }) => (
    <Text isOwned={isOwned}>
        <a href={file.downloadURL}>
            <i className='fa fa-cloud-download'></i>
            {' '}
            {file.name}
        </a>
    </Text>
)