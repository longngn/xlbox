import React from 'react'
import ReactDOM from 'react-dom'
import IconButton from 'material-ui/IconButton'
import styles from './InputButtons.css'
import colors from '../config/colors'

export default ({ onSend, onFileSelected, onLogOut }) => {
    let fileInputNode
    const handleFileInput = (e) => {
        const file = e.target.files[0]
        if (file) onFileSelected(file)
    }

    return (
        <div className={styles.container}>
            <input 
                type='file'
                ref={node => fileInputNode = node}
                onChange={handleFileInput}
                style={{ display: 'none' }}
            />
            <IconButton
                iconClassName='fa fa-file-image-o'
                iconStyle={{ color: colors.ownedMessage }}
                tooltip='Upload image or file'
                touch={true}
                onTouchTap={() => {
                    const element = ReactDOM.findDOMNode(fileInputNode)
                    element.click()
                }}
            />
            <IconButton 
                iconClassName='fa fa-paper-plane-o'
                iconStyle={{ color: colors.ownedMessage }}
                tooltip='Send message'
                touch={true}
                onTouchTap={onSend}
            />
            <IconButton 
                iconClassName='fa fa-sign-out'
                iconStyle={{ color: colors.ownedMessage }}
                tooltip='Log out'
                touch={true}
                onTouchTap={onLogOut}
            />
        </div>
    )
}