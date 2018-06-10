import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

let socket;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    socket = io.connect('http://localhost:8000');
    socket.on('Reminder', (res) => {
      alert(res); /* global alert */
    });
  }
  componentWillUnmount() {
    socket.disconnect();
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default AppContainer;
