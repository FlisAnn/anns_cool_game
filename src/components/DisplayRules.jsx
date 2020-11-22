import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const DisplayRules = () => (
  <Message Icon>
    <Icon name='announcement' />
      <Message.Content>
        <Message.Header id="gamerules" >Rules of the game</Message.Header>
        1. Rock beats scissors
        2. Scissors beats paper
        3. Paper beats rock
      </Message.Content>
    </Message>

)
export default DisplayRules