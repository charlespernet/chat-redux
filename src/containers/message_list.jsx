import React, { Component } from 'react';
import Message from '../components/message'
import MessageForm from './message_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.activeChannel)
  }

  componentDidMount() {
    // window.setInterval(console.log('bob'), 3000);
    this.intervalFetchMessages = setInterval(() => this.props.fetchMessages(this.props.activeChannel), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalFetchMessages);
  }

  render() {
    return(
      <div className="message-list">
        <div className="message-list-header">
          <h3>Channel #{this.props.activeChannel}</h3>
        </div>
        <div className="message-list-body">
          {this.props.messages.map(message => <Message key={message.id} {...message} />)}
        </div>
        <div className="message-list-form">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
