import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

import { setUser } from '../actions';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
