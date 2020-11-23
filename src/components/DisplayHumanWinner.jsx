import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

const DisplayHumanWinner = () => (
  <Message icon color="green" size="huge">
    <Icon name='smile outline' loading />
    <Message.Content>
      <Message.Header >You win!</Message.Header>
    </Message.Content>
  </Message>
)

export default DisplayHumanWinner
