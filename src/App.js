import React, { Component } from "react";
import PatentCard from "./Components/PatentCard";
import dimmerImage from "./Images/dimmer.jpg";
import { Container, Segment, Dimmer, Loader, Image } from "semantic-ui-react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patentData: [],
      isLoading: true
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/sample`).then(res => {
      this.setState({ patentData: res.data, isLoading: false });
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <br />
          <Container>
            <Segment>
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
              <Image src={dimmerImage} />
            </Segment>
          </Container>
        </div>
      );
    }
    return (
      <div>
        <br />
        <Container>
          <Segment.Group>
            <PatentCard PatentData={this.state.patentData} />
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
