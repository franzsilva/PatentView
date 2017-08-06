import React, { Component } from 'react';
import HeaderWithType from './HeaderWithType';
import PartiesTable from './PartiesTable';
import PatentClaims from './PatentClaims';
import PatentDescription from './PatentDescription';
import {
  Grid, Header, Segment, Tab, Divider
} from 'semantic-ui-react'


class PatentCard extends Component {
   
    constructor(props) {
      super(props);
      this.patentData = this.props.PatentData['patent-document']

    }
    
    render() {
        let panes = [
            { menuItem: 'Claims', render: () => 
            <Tab.Pane attached={false}>
                <PatentClaims claims={this.patentData.claims} />
            </Tab.Pane> },
            { menuItem: 'Description', render: () => 
            <Tab.Pane attached={false}>
                <PatentDescription description={this.patentData.description} />
            </Tab.Pane> },
        ]

        return (
            <Segment>
          <Grid  stackable columns={2}>
            <Grid.Row >
            <Grid.Column textAlign={'left'} width={8}>
            <span><Header></Header></span>
            <HeaderWithType type={'Title'} size={'h2'} content={'Method of packaging articles'} />
            <Divider />
            <Header as='h2'>Abstract</Header>
            <p>{this.patentData.abstract.p['#text']}</p>
            </Grid.Column>
            <Grid.Column textAlign={'right'} width={8}>
              <HeaderWithType type={'Patent Nº'} size={'h2'} content={this.patentData['-ucid']} />
              <HeaderWithType type={'Doc Nº'} size={'h5'} content={this.patentData['-doc-number']} />
              <HeaderWithType type={'Date'} size={'h5'} content={this.patentData['-date']} />         
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign={'left'} width={8}>
                <Tab menu={{ pointing: true }} panes={panes} />
                </Grid.Column>
              <Grid.Column textAlign={'left'} width={8}>
                <PartiesTable />
                </Grid.Column>
              </Grid.Row>
          </Grid>
          <br/>
          
        </Segment>
        );
    }
}

export default PatentCard;