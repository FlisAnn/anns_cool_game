import React from 'react'
import {
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react'

const DisplayHuman = () => (
  
        <Grid.Column>
          <Header as="h2" color="grey"> 
            You
          </Header>
            <Grid.Row icon>
              <Icon name='hand rock outline' size='huge' color='pink' name="humanrock"/>
              <Icon name='hand scissors outline' size='huge' color='yellow' name="humanscissors" />
              <Icon name='hand paper outline'size='huge' color='teal' name="humanpaper" />
            </Grid.Row>
         
          <Header id="human" color="grey">
            Rock, Stone or Paper?
          </Header>
        </Grid.Column>
)

export default DisplayHuman
