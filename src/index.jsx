// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import ChannelsReducer from './reducers/channels_reducer'
import currentUserReducer from './reducers/current_user_reducer'
import MessagesReducer from './reducers/messages_reducer'
import SelectedChannelReducer from './reducers/selected_channel_reducer'


// State and reducers
const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: SelectedChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
