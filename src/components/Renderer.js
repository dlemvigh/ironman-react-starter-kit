import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from './environment';

class Renderer extends React.Component {
  static propTypes = {
    query: PropTypes.func,
    render: PropTypes.func.isRequired,
    variables: PropTypes.object,
    showLoader: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    variables: {},
    showLoader: false,
  };

  render() {
    const showLoader = this.props && this.props.showLoader;
    return (
      <QueryRenderer
        environment={environment}
        variables={this.props.variables}
        query={this.props.query}
        render={({ error, props }) => {
          if (error) {
            console.error('error', error);
            return null;
            // return <div>{JSON.stringify(error, null, 2)}</div>;
          } else if (!props) {
            return showLoader ? <div>Loading...</div> : null;
          }
          // return <span>test</span>;
          return this.props.render(props);
        }}
      />
    );
  }
}

export default Renderer;
