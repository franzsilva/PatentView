import React, { Component } from 'react';
import {
  Table
} from 'semantic-ui-react'
class PartiesTable extends Component {
    render() {
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
        );
    }
}

export default PartiesTable;