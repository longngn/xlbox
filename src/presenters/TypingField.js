import React from 'react'
import TextField from 'material-ui/TextField'

export default class TypingField extends React.Component {
    state = {
        message: ''
    }
    handleKeyDown = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            event.stopPropagation()
            this.props.onEnter(event.target.value)            
            this.setState({ message: '' })
        }
    }
    handleChange = (event) => {
        this.setState({ message: event.target.value })        
    }
    render() {
        return <TextField 
            id='input-typing-field'
            multiLine={true}
            hintText='Type a message...'
            underlineShow={false}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            value={this.state.message}
            fullWidth={true}
            rowsMax={8}
        />

    }
}

TypingField.propTypes = {
    onEnter: React.PropTypes.func
}