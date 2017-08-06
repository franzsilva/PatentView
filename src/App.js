import React, { Component } from 'react';
import './App.css';
import sampleData from './Data/sample.json';
import {
  Container, Grid, Header, Segment, Tab, Divider, Table
} from 'semantic-ui-react'

const panes = [
  { menuItem: 'Claims', render: () => 
  <Tab.Pane attached={false}>
    Tab 1 Content
  </Tab.Pane> },
  { menuItem: 'Description', render: () => 
  <Tab.Pane attached={false}>
    Tab 2 Content
  </Tab.Pane> },
  { menuItem: 'Media', render: () => 
  <Tab.Pane attached={false}>
    Tab 3 Content
  </Tab.Pane> },
]


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
        <Segment>
          <Grid  stackable columns={2}>
            <Grid.Row >
            <Grid.Column textAlign={'left'} width={8}>
            <span>Title<Header as='h2'>Method of packaging articles</Header></span>
            <Divider />
            <Header as='h2'>Abstract</Header>
            <p>A package is formed by holding a nonextensible strip taut and wrapping it around the upper and/or lower periphery of the bundle and joining the ends of the strip segments e.g. by adhesive bonding. A projecting margin of the strip is folded to overlie the bundle or underlie the bundle so that an L-configuration is imparted to the frame formed around the bundle after the strip is applied thereto.</p>
           
            </Grid.Column>
            <Grid.Column textAlign={'right'} width={8}>
             <span> Patent Nº<Header as='h2'>US-5551212-A</Header></span>
              <span>Doc Nº<Header as='h5'>5551212</Header></span>
              <span>Date<Header as='h5'>3 Sep 1996</Header></span>
              
          
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign={'left'} width={8}>
 <Tab menu={{ pointing: true }} panes={panes} />
                </Grid.Column>
              <Grid.Column textAlign={'left'} width={8}>
                <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Parties</Table.HeaderCell>
          <Table.HeaderCell>Name (Location)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Inventor(s)</Table.Cell>
          <Table.Cell>
            Franz Silva (VE),
            Franz Silva (VE),
            Franz Silva (VE)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Assignee(s)</Table.Cell>
          <Table.Cell>
            Franz Silva (VE),
            Franz Silva (VE),
            Franz Silva (VE)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Agent(s)</Table.Cell>
          <Table.Cell>
            Franz Silva (VE),
            Franz Silva (VE),
            Franz Silva (VE)
          </Table.Cell>
        </Table.Row>
        
      </Table.Body>
    </Table>
                </Grid.Column>
              </Grid.Row>
          </Grid>
          <br/>
          
        </Segment>
      </Segment.Group>
    </Container>
  </div>
    );
  }
}

export default App;
