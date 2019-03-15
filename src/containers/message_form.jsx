import React, { Component } from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessage } from '../actions';
import { createMessage } from '../actions';

class MessageForm extends Component {
  handleChange = (event) => {
    this.props.setMessage(event.target.value)
  }

  handleSubmit = () => {
    this.props.createMessage({channel: this.props.activeChannel, author: 'Bob', content: this.props.message, created_at: '24.04.2019'})
    this.props.setMessage("")
  }

  render() {
    return(
      <form action="#" onSubmit={this.handleSubmit}>
        <div className="message-input">
            <input type="text" value={this.props.message} onChange={this.handleChange} />
            <button type='submit'>SEND</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setMessage, createMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
