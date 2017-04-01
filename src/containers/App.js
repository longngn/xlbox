import React from 'react'
import Pager from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import InputField from './InputField'
import MessagesArea from './MessagesArea'
import Menu from './Menu'
import Login from './Login'
import styles from './App.css'

import { onAuthStateChange } from '../config/auth';
import * as db from '../config/db';

export default class App extends React.Component {
    state = {
        user: null,
        allUsersById: {}
    }
    componentDidMount() {
        onAuthStateChange(user => {
            this.setState({ user })
            if (user) db.updateUser(user)
        })
        db.onUsersDataChange(users => 
            this.setState({ allUsersById: users })
        )
    }
    render() {
        const { user } = this.state
        return (
            <div className={styles.container}>
                <Pager className={styles.chatbox} zDepth={2}>
                    <MessagesArea 
                        currentUser={user}
                        getUser={ id => this.state.allUsersById[id] } 
                    />
                    <Divider />
                    {user? <InputField user={user}/> : <Login />}
                    <Divider />
                    <Menu isUserLoggedIn={Boolean(user)} />
                </Pager>
            </div>
        )
    }
}