import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions/index';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  };

  componentDidMount() {
    this.refresher = setInterval(function() {
      this.fetchMessages
    }, 5000);
  };

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;

  };

  componentWillUnmount() {
    clearInterval(this.refresher);
  };

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
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
          <ul className="list-group messages" ref={(list) => { this.list = list; }}>
            {this.props.messages.length > 0 ? this.renderList() : "" }
          </ul>
        <MessageForm />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser,
    channels: state.channels
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
