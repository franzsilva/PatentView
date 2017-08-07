import React, { Component } from 'react';
import {
  Table
} from 'semantic-ui-react'
class PartiesTable extends Component {

    getManyInfo(dataArray){
        return(dataArray.map((item, index) => (
        <span key={index}>{this.getInfo(item, index)}</span>
    )))
    }
    getInfo(item){
        return(
        <span>
            {!!item.addressbook['name'] ? item.addressbook['name']['#text'] : '' }
            {!!item.addressbook['first-name'] ? item.addressbook['first-name']['#text'] : ''}
            {!!item.addressbook['last-name'] ? item.addressbook['last-name']['#text'] : ''}
            {!!item.addressbook['address'] ? ` (${!!item.addressbook['address']['city'] ? item.addressbook['address']['city']['#text'] : ''} ${!!item.addressbook['address']['country'] ? item.addressbook['address']['country']['#text'] : ''})` : ''}
            <br/>
        </span>
    )
    }
    render() {
        const {inventors, assignees, agents} = this.props.parties
        return (
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
                            {this.getManyInfo(inventors.inventor)}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Assignee(s)</Table.Cell>
                        <Table.Cell>
                            {this.getInfo(assignees.assignee)}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Agent(s)</Table.Cell>
                        <Table.Cell>
                            {this.getManyInfo(agents.agent)}
                        </Table.Cell>
                    </Table.Row>
                    
                </Table.Body>
            </Table>
        );
    }
}

export default PartiesTable;