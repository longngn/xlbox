import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import './index.css'
import './font-awesome'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TypingField from '../src/presenters/TypingField'
import MessageBubble from '../src/presenters/MessageBubble'
import LoginButton from '../src/presenters/LoginButton'
import MessageGroup from '../src/presenters/MessageGroup'
import Notification from '../src/presenters/Notification'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

addDecorator(story => (
    <div>
        <MuiThemeProvider>
            {story()}
        </MuiThemeProvider>
    </div>
))

storiesOf('TypingField', module)
  .add('Log message to console', () => (
    <TypingField onEnter={message => console.log(message)} />
  ))

storiesOf('MessageBubble', module)
  .add('No text', () => <MessageBubble>{' '}</MessageBubble>)
  .add('Short text', () => <MessageBubble>Lorem ipsum dolor sit amet.</MessageBubble>)
  .add('Long Text', () => <MessageBubble>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, labore magni. Veritatis aperiam omnis architecto, reiciendis aut voluptates veniam quisquam!</MessageBubble>)

storiesOf('LoginButton', module)
    .add('Facebook', () => <LoginButton loginWith='Facebook' />)
    .add('Google', () => <LoginButton loginWith='Google' />)
    .add('Github', () => <LoginButton loginWith='Github' />)

const mockUser = {displayName: "Long Ke", avatarURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/17626272_1849406995321399_8254827245229704301_n.jpg?oh=91169b8356bb3ad5c2db73d352dc69a4&oe=59930C17", profileURL: "https://www.facebook.com/1851163488479083"}

storiesOf('MessageGroup', module)
    .add('Owned', () => <MessageGroup
        message='Lorem ipsum dolor sit amet.'
        user={mockUser}
        isOwned={true}
    />)
    .add('Unowned', () => <MessageGroup
        message='Lorem ipsum dolor sit amet.'
        user={mockUser}
        isOwned={false}
    />)

storiesOf('Notification', module)
    .add('Comes online', () => <Notification user={mockUser}> has came online</Notification>)