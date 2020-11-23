import React from 'react';
import TopHeader from './components/TopHeader'
import DisplayRules from './components/DisplayRules'
import GameContainer from './components/GameContainer'
import Footer from './components/Footer'
import { Container } from 'semantic-ui-react'


function App() {
  return (
   
    <Container>
      <TopHeader/>
      <DisplayRules/>
      <GameContainer/>
      <Footer/>
    </Container>
   
  )
}

export default App;
