import React, { Component } from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages()
  }

  render() {
    return(
      <div className="message-list">
        {this.props.messages.map(message => <Message key={message.author} />)}
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
  return bindActionCreators({ setMessages: setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
