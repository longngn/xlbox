import React from 'react'
import TypingField from '../presenters/TypingField'
import styles from './InputField.css'
import { addMessage } from '../config/db';

export default class InputField extends React.Component {
    sendMessage = (message) => {
        addMessage(message, this.props.user.id)
    }
    render() {
        return (
            <div className={styles.container}>
                <TypingField onEnter={this.sendMessage} />
            </div>
        )
    }
}