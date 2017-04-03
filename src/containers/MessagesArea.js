import React from 'react'
import ReactDOM from 'react-dom'
import Message from '../presenters/Message'
import Notification from '../presenters/Notification'
import styles from './MessagesArea.css'

import * as db from '../config/db';

export default class MessagesArea extends React.Component {
    state = {
        messages: []
    }
    componentDidMount() {
        db.onMessagesDataChange(newMessages => {
            this.setState({ messages: newMessages })
        })
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        const element = ReactDOM.findDOMNode(this.bottomMostNodeToScrollInto)
        element.scrollIntoView()
    }
    renderMessages = (message) => {
        const sender = this.props.getUser(message.senderId)

        switch (message.type) {
            case db.messageTypes.NOTIFICATION:
                return <Notification 
                    key={message.id}
                    user={sender}
                    message={message.content}
                />
            case db.messageTypes.TEXT:
            case db.messageTypes.FILE:
                const { currentUser } = this.props
                const isOwned = currentUser ?
                    message.senderId === currentUser.id :
                    false        
                return <Message
                    key={message.id}
                    message={message}
                    user={sender}
                    isOwned={isOwned}
                />
            default:
                return <div></div>
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.messages.map(this.renderMessages)}
                <div ref={node => this.bottomMostNodeToScrollInto = node}></div>
            </div>
        )
    }
}