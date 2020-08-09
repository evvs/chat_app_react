import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

const mapStateToProps = ({ channels }) => {
  const { byId, allIds, currentChannel } = channels;
  return {
    channels: allIds.map((id) => byId[id]),
    currentChannel,
  };
};

const Channels = (props) => {
  const { channels, currentChannel } = props;
  return (
    <div className="border-right">
      <div className="d-flex justify-content-center"><span className="font-weight-light">Channels</span></div>
      <ul className="list-group list-group-flush">
        {channels.map(({ id, name }) => {
          const buttonClasses = cn({
            btn: true,
            'btn-primary': true,
            'btn-block': true,
            active: id === currentChannel,
          });
          return (
            <li key={id} className="list-group-item">
              <button className={buttonClasses} type="button">{name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Channels);
