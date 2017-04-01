import React from 'react'
import LoginButton from '../presenters/LoginButton'
import styles from './Login.css'

import { 
    logInWithFacebook,
    logInWithGoogle,
    logInWithGithub
} from '../config/auth'

export default () => (
    <div className={styles.container}>
        <LoginButton 
            style={{ height: 60 }} 
            className={styles.button} 
            loginWith='Facebook' 
            onClick={logInWithFacebook}
        />
        <LoginButton 
            style={{ height: 60 }} 
            className={styles.button} 
            loginWith='Google' 
            onClick={logInWithGoogle}
        />
        <LoginButton   
            style={{ height: 60 }} 
            className={styles.button} 
            loginWith='Github' 
            onClick={logInWithGithub}
        />
    </div>
)