import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import colors from '../config/colors'

export default ({ loginWith, onClick, ...props }) => {
    switch (loginWith) {
        case 'Facebook':
            return <RaisedButton
                label='Log in with Facebook'
                icon={<FontIcon className='fa fa-facebook' color='#fff'/>}
                onTouchTap={onClick}
                backgroundColor={colors.facebook}
                labelColor='#fff'
                {...props}
            />
        case 'Google':
            return <RaisedButton
                label='Log in with Google'
                icon={<FontIcon className='fa fa-google' color='#fff'/>}
                onTouchTap={onClick}
                backgroundColor={colors.google}
                labelColor='#fff'
                {...props}
            />
        case 'Github':
            return <RaisedButton
                label='Log in with Github'
                icon={<FontIcon className='fa fa-github' color='#fff'/>}
                onTouchTap={onClick}
                backgroundColor={colors.github}
                labelColor='#fff'
                {...props}
            />
        default:
            return <i></i>
    }
}