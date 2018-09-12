import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions/index';
import { fetchMessages } from '../actions/index';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (event) => {
    this.props.selectChannel(event.target.innerHTML);
  };

  render() {
    return (
      <div className="channel-list">
        <ul>
        {this.props.channels.map((channel) => {
          if (channel === this.props.selectedChannel) {
            return(
             <li onClick={this.handleClick} className="channel selected">{channel}</li>
            );
          } else {
            return(
              <li onClick={this.handleClick} className="channel">{channel}</li>
            );
          };
        })}
        </ul>
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
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
