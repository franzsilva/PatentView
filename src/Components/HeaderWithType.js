import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class HeaderWithType extends Component {
  render() {
    const { content, type, size } = this.props;
    return (
      <span>
        {" "}{type}
        <Header as={size}>{content}</Header>
      </span>
    );
  }
}

export default HeaderWithType;
