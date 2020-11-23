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
              <Icon name='hand rock outline' size='huge' color='pink' />
              <Icon name='hand scissors outline' size='huge' color='yellow' />
              <Icon name='hand paper outline'size='huge' color='teal' />
            </Grid.Row>
         
          <Header id="human" color="grey">
            Stone, Rock or Paper?
          </Header>
        </Grid.Column>
)

export default DisplayHuman
