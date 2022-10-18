import React from "react";
import ErrorIndicator from "../elements/error_indicator/errorIndicator";

export class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
