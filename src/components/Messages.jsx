import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
  const messages = useSelector((state) => state.messages);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
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

export default Messages;
