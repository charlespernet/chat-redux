// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, applyMiddleware(reduxPromise, logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
