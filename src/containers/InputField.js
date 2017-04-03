import React from 'react'
import InputButtons from './InputButtons'
import TextField from 'material-ui/TextField'
import styles from './InputField.css'
import * as db from '../config/db';

export default class InputField extends React.Component {
    state = {
        message: ''
    }

    sendMessage = () => {
        const { message } = this.state
        db.addMessage(db.messageTypes.TEXT, message, this.props.user.id)
        this.setState({ message: '' })
    }
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            event.stopPropagation()
            this.sendMessage()           
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <TextField 
                    id='input-typing-field'
                    multiLine={true}
                    hintText='Type a message...'
                    underlineShow={false}
                    onKeyDown={this.handleKeyDown}
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                    fullWidth={true}
                    rowsMax={8}
                />
                <InputButtons onSend={this.sendMessage} />
            </div>
        )
    }
}