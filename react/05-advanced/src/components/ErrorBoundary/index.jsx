import { Component } from 'react';

import './index.scss';

class ErrorBoundary extends Component {
  state = { errorMessage: false };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.message };
  }

  render() {
    return this.state.errorMessage ? (
      <div className="ErrorBoundary">
        <h2>Something went wrong</h2>
        <code>Error message: {this.state.errorMessage}</code>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
