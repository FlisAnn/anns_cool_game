import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const TopHeader = () => (
  <Header as='h1' textAlign='center' >
    <Icon name='hand rock outline' size='small' color='pink' />
    <Icon name='hand scissors outline' size='small' color='yellow' />
    <Icon name='hand paper outline'size='small' color='teal' />
    <Header.Content id="topheader">
      Stone, Rock and paper
    </Header.Content>
  </Header>
)

export default TopHeader;