import React, { Component } from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions'
import { fetchMessages } from '../actions'

class ChannelList extends Component {
  static defaultProps = {
    channels: [{ name: 'General', slug: 'general'}, { name: 'Le Wagon', slug: 'wagon'}]
  }

  selectChannel = (event) => {
    this.props.selectChannel(event.target.id)
    this.props.fetchMessages(event.target.id)
  }

  buildChannels() {
    return this.props.channels.map(channel => {
      const classNames = this.props.activeChannel == channel.slug ? 'selected' : '';
      return <p id={channel.slug}
                 key={channel.slug}
                 onClick={this.selectChannel}
                 className={classNames}>
                 #{channel.name}
              </p>
    });
  }

  render() {
    return(
      <div className="channel-list">
        <div className="channel-list-border"></div>
        <div className="channel-list-body">
          <h3>Redux Chat</h3>
          {this.buildChannels()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectChannel, fetchMessages}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
