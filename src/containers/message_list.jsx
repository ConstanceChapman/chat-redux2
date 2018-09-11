import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions/index';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {

  componentWillMount() {
    fetchMessages(this.props.selectedChannel);
  };

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message message={message} key={message.created_at} />
      );
    });
  };

  render() {
    return (
      <div className="message-list">
        <ul className="list-group messages">
          {this.renderList()}
        </ul>
        <MessageForm />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(MessageList);
