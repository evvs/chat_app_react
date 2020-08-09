import { connect } from 'react-redux';
import React from 'react';
import * as actions from '../actions';

const mapStateToProps = ({ messages, channels: { currentChannel } }) => {
  const currentChannelMessages = messages.filter(({channelId}) => channelId === currentChannel);
  console.log('currM', currentChannelMessages, currentChannel)
  return { currentChannelMessages };
};

const Messages = (props) => {
  const { currentChannelMessages } = props;
  return (
    <div>
      <ul className="list-group list-group-flush">
        {currentChannelMessages.map(({ author, data, id }) => {
          const AuthorMessage = () => <span className="text-primary">{author}</span>;
          const TextMessage = () => <span>{data}</span>;
          return (
            <li key={id} className="list-group-item list-special">
              <AuthorMessage />
              {': '}
              <TextMessage />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Messages);
