import React, { Component } from 'react';

class Message extends Component {
  componentDidMount() {
    // Can be refacto using Ref
    document.querySelector('.message-list-body').lastChild.scrollIntoView();
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
