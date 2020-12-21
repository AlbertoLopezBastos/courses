import React from 'react';

const asyncComponent = (importComponent) => {
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component })
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
}


export default asyncComponent