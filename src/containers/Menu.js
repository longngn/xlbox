import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { logOut } from '../config/auth';

export default ({ isUserLoggedIn }) => (
    <div>
        {isUserLoggedIn && <RaisedButton
            label='Log out'
            onTouchTap={logOut}
        />}
    </div>
)
