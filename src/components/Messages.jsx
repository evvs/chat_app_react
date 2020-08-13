import { connect } from 'react-redux';
import React from 'react';
import SendMessageForm from './SendMessageForm';

const mapStateToProps = ({ messages, channels: { currentChannel } }) => {
  const currentChannelMessages = messages.filter(({ channelId }) => channelId === currentChannel);
  console.log('currM', currentChannelMessages, currentChannel);
  return { currentChannelMessages };
};
const Message = (props) => {
  const { author, text } = props;
  return (
    <div>
      <b>{author}</b>
      {': '}
      {text}
    </div>
  );
};

const Messages = (props) => {
  const { currentChannelMessages } = props;
  return (
    <div className="d-flex flex-column justify-content-between flex-grow-1 w-100">
      <div className="overflow-auto">
        {currentChannelMessages.map(({
          author, text, id,
        }) => <Message key={id} author={author} text={text} />)}
      </div>
      <SendMessageForm />
    </div>
  );
};

export default connect(mapStateToProps)(Messages);
