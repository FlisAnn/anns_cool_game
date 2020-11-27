import React from 'react'
import {
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react'

const DisplayComputer = () => (
  
  <Grid.Column>
  <Header as="h2" color="grey"> 
    Computer
  </Header>
    <Grid.Row icon>
      <Button.Group>
      <Button icon> 
        <Icon name='hand rock outline' size='huge' color='pink' id="computerRock" />
      </Button> 
      <Button.Or />
      <Button icon>
        <Icon name='hand paper outline' size='huge' color='yellow' id="computerPaper" />
      </Button>
      <Button.Or />
      <Button icon>
        <Icon name='hand scissors outline' size='huge' color='teal' id="computerScissors" />
      </Button>
      </Button.Group>
    </Grid.Row>
         
    <Header id="computer" color="grey">
    Rock, Paper or Scissors?
      </Header>
    </Grid.Column>
)

export default DisplayComputer