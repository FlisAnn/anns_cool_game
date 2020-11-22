import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

const DisplayRules = () => (
  <Message color="teal">
      <Message.Content>
        <Header id="gamerules" as="h2" >
          <Icon name='announcement' size="tiny" />
            Rules of the game
        </Header>
        <Message.Item>1. Rock beats scissors</Message.Item>
        <Message.Item>2. Scissors beats paper</Message.Item>
        <Message.Item>3. Paper beats rock</Message.Item>
      </Message.Content>
    </Message>

)
export default DisplayRules