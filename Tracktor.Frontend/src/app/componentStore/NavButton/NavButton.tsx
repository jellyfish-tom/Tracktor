import * as React from "react";
import { Redirect } from "react-router";
import { Button } from "antd";

interface IProps {
  path: string;
}

export class NavButton extends React.PureComponent<IProps, {}> {
  state = {
    navigate: false
  };

  render() {
    console.log(this.props.children);
    if (this.state.navigate) {
      return <Redirect to={this.props.path} push={true} />;
    }

    return (
      <Button onClick={() => this.setState({ navigate: true })}>
        {this.props.children}
      </Button>
    );
  }
}
