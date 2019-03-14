import React, { Component } from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages()
  }

  render() {
    return(
      <div className="message-list">
        {this.props.messages.messages.map(message => <Message key={message.author} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
