import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const DisplayComputerWinner = () => (
  <Message icon color="red" size="huge">
    <Icon name='frown outline' loading/>
    <Message.Content>
      <Message.Header>Computer wins!</Message.Header>
    </Message.Content>
  </Message>
)

export default DisplayComputerWinner