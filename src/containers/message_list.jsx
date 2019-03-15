import React, { Component } from 'react';
import Message from '../components/message'
import MessageForm from './message_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import { setUser } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    // Should be in app but this is the first container
    if (this.props.currentUser == 'guest user') {
      this.props.setUser()
    }
    this.props.fetchMessages(this.props.activeChannel)
  }

  componentDidMount() {
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
    activeChannel: state.activeChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages, setUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
