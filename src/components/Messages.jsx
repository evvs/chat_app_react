import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ messages, channels }) => ({
  messages,
  currentChannelId: channels.currentChannel,
});

const Messages = (props) => {
  const { messages, currentChannelId } = props;
  const currentChannelMessages = messages.filter(({ channelId }) => channelId === currentChannelId);
  return (
    <div className="overflow-auto">
      {currentChannelMessages.map(({ id, author, text }) => (
        <div key={id} className="text-break">
          <span className="text-primary">{author}</span>
          {': '}
          {text}
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Messages);
