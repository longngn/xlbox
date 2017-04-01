import React from 'react'
import ReactDOM from 'react-dom'
import MessageGroup from '../presenters/MessageGroup'
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
        const node = ReactDOM.findDOMNode(this.bottomMostNodeToScrollInto)
        node.scrollIntoView()
    }
    renderMessages = (message) => {
        const { currentUser } = this.props
        const isOwned = currentUser ?
            message.senderId === currentUser.id :
            false
        const sender = this.props.getUser(message.senderId)

        return <MessageGroup
            key={message.id}
            message={message.message}
            user={sender}
            isOwned={isOwned}
        />
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