import React from 'react';
import TopHeader from './components/TopHeader'
import DisplayRules from './components/DisplayRules'
import GameContainer from './components/GameContainer'
import Footer from './components/Footer'
import { Container, Button } from 'semantic-ui-react'
import DisplayHumanWinner from './components/DisplayHumanWinner';
import DisplayTie from './components/DisplayTie'
import DisplayComputerWinner from './components/DisplayComputerWinner';



function App() {
  return (
   
    <Container id="container">
      <TopHeader/>
      <DisplayRules/>
      <GameContainer/>
      <DisplayHumanWinner/>
      <DisplayTie/>
      <DisplayComputerWinner/>
      
        <Button id="button" color="pink" tabIndex="true" size="huge">Play again</Button>
      <Footer/>
    </Container>
   
  )
}

export default App;
