import React from 'react'
import DisplayHuman from './DisplayHuman'
import DisplayComputer from './DisplayComputer'
import {  
  Divider,
  Grid,
  Segment,
} from "semantic-ui-react"

const GameContainer = () => (
  <Segment placeholder color="teal">
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>VS</Divider>

      <Grid.Row verticalAlign='middle'>
        <DisplayHuman />
        <DisplayComputer />
      </Grid.Row>
    </Grid>
  </Segment>
)

export default GameContainer;


