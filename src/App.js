import React, { Component } from 'react';
import './App.css';
import {
  Container, Grid, Header, Segment,
} from 'semantic-ui-react'
const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}


class App extends Component {
  render() {
    return (
      <div>
    <Header
      as='h1'
      content='Patent Sample View'
      style={style.h1}
      textAlign='center'
    />
   
    <Container>
      <Segment.Group>
        <Segment>
          <Grid reversed='mobile' stackable columns={2}>
            <Grid.Column textAlign={'left'} width={8}>
            <span>Title<Header as='h2'>Method of packaging articles</Header></span>

            </Grid.Column>
            <Grid.Column textAlign={'right'} width={8}>
             <span> Patent Nº<Header as='h1'>US-5551212-A</Header></span>
              <span>Doc Nº<Header as='h3'>5551212</Header></span>
              <span>Date<Header as='h3'>3 Sep 1996</Header></span>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </Container>
  </div>
    );
  }
}

export default App;
