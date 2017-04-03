import React from 'react'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo500 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const customMuiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500
    },
    flatButton: {
        primaryTextColor: indigo500
    }
})

const Root = () => (
    <MuiThemeProvider muiTheme={customMuiTheme}>
        <App />
    </MuiThemeProvider>
)

export default Root