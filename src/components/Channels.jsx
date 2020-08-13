import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import * as reduxActions from '../actions';

const mapStateToProps = ({ channels }) => ({ channels });
const mapDispatchToProps = { changeChannel: reduxActions.changeChannel };

const Channels = (props) => {
  const { channels: { channels, currentChannel }, changeChannel } = props;

  const changeChannelHandler = (id) => (e) => {
    e.preventDefault();
    changeChannel({ id });
  };

  return (
    <div className="border-right">
      <div className="d-flex justify-content-center">
        <span>Channels</span>
        <button type="button" className="btn btn-primary btn-sm ml-1">+</button>
      </div>
      <ul className="list-group list-group-flush">
        {channels.map(({ id, name }) => {
          const buttonClasses = cn('btn', 'btn-primary', 'btn-block', {
            active: id === currentChannel,
          });
          return (
            <li key={id} className="list-group-item">
              <button className={buttonClasses} type="button" onClick={changeChannelHandler(id)}>{name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
