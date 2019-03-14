import React, { Component } from 'react';

class Message extends Component {
  static defaultProps = {
    author: "anonymous77",
    content: "My name is anonymous77",
    created_at: "2017-09-26T23:03:21.194Z"
  }

  render() {
    return(
      <div className="message">
        <div className="message-header">
          <h5>{this.props.author}</h5>
          <p>{this.props.created_at}</p>
        </div>
        <div className="message-body">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Message;
