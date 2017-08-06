import React, { Component } from 'react';
import sampleData from './Data/sample.json';
import PatentCard from './Components/PatentCard';
import {
  Container, Header, Segment
} from 'semantic-ui-react'




class App extends Component {

  render() {
    return (
      <div>
    <Header
      as='h1'
      content='Patent Sample View'
      textAlign='center'
    />   
    <Container>
      <Segment.Group>
        <PatentCard PatentData={sampleData} />
      </Segment.Group>
    </Container>
  </div>
    );
  }
}

export default App;
