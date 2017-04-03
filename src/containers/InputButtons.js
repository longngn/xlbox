import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import styles from './InputButtons.css'

export default ({ onSend }) => (
    <div className={styles.container}>
        <FlatButton 
            label='Send'
            onTouchTap={onSend}
        />
    </div>
)