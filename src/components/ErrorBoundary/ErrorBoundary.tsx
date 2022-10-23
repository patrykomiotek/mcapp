import { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
  fallbackComponent?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hasError: false,
  //   }
  // }

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError error: ', error);
    // this.setState({ hasError: true })
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch error: ', error, ', errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent ? this.props.fallbackComponent : <p>An error has occcured!!!</p>
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

// <ErrorBoundary><div><Product /><BuggyComponent /></div></ErrorBoundary>