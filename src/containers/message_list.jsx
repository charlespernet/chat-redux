import React, { Component } from 'react';
import Message from '../components/message'

class MessageList extends Component {
  static defaultProps = {
    messages: [
      {
        "author":"anonymous92",
        "content":"Hello world!",
        "created_at":"2017-09-26T23:03:16.365Z"
      },
      {
        "author":"anonymous77",
        "content":"My name is anonymous77",
        "created_at":"2017-09-26T23:03:21.194Z"
      }
    ]
  }

  render() {
    return(
      <div className="message-list">
        {this.props.messages.map(message => <Message key={message.author} />)}
      </div>
    );
  }
}

export default MessageList;