import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="channel-list">
        <div className="channel-list-border"></div>
        <div className="channel-list-body"></div>
      </div>
      <MessageList />
    </div>
  );
};

export default App;
