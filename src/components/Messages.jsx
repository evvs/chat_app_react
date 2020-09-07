import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
  const messages = useSelector((state) => state.messages);
  const currentChannel = useSelector((state) => state.channels.currentChannel);
  const currentChannelMessages = messages.filter(({ channelId }) => channelId === currentChannel);
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

export default Messages;
