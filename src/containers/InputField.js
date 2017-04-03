import React from 'react'
import InputButtons from '../presenters/InputButtons'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

import styles from './InputField.css'
import * as db from '../config/db';
import * as storage from '../config/storage';

export default class InputField extends React.Component {
    state = {
        message: '',
        alertFileIsTooLarge: false
    }

    sendMessage = () => {
        const { message } = this.state
        db.addMessage(db.messageTypes.TEXT, message, this.props.user.id)
        this.setState({ message: '' })
    }
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {  // if enter with no shift get pressed 
            event.preventDefault()
            event.stopPropagation()
            this.sendMessage()           
        }
    }
    handleFileSelected = (file) => {
        if (file.size > storage.MAXIMUM_FILE_SIZE) {
            this.setState({ alertFileIsTooLarge: true })
            return
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
                    autoFocus={true}
                />
                <InputButtons onSend={this.sendMessage} onFileSelected={this.handleFileSelected} />

                <Dialog
                    actions={<FlatButton 
                        label='Ok' 
                        onTouchTap={() => this.setState({ alertFileIsTooLarge: false })} 
                        primary={true}
                    />}
                    open={this.state.alertFileIsTooLarge}
                    onRequestClose={() => this.setState({ alertFileIsTooLarge: false })}
                >
                    The file you have chosen is too large. The maximum file size is 10MB.
                </Dialog>
            </div>
        )
    }
}