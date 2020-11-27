import React from 'react'
import {
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react'

const DisplayHuman = () => (
  
        <Grid.Column>
          <Header as="h2" color="grey"> 
            You
          </Header>
            <Grid.Row icon>
              <Button.Group>
              <Button icon> 
                <Icon name='hand rock outline' size='huge' color='pink' id="humanRock"/>
              </Button> 
              <Button.Or />
              <Button icon>
                <Icon name='hand paper outline' size='huge' color='yellow' id="humanPaper" />
              </Button>
              <Button.Or />
              <Button icon>
                <Icon name='hand scissors outline' size='huge' color='teal' id="humanScissors"/>
              </Button>
              </Button.Group>
            </Grid.Row>
         
          <Header id="human" color="grey">
            Rock, Paper or Scissors?
          </Header>
        </Grid.Column>
)

export default DisplayHuman
