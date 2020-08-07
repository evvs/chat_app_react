import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ channels }) => {
  const { byId, allIds } = channels;
  return {
    channels: allIds.map((id) => byId[id]),
    allIds,
  };
};

const Channels = (props) => {
  const { channels } = props;
  return (
    <div>
      <div>Channels</div>
      <ul className="list-group list-group-flush">
        {channels.map(({ id, name }) => (
          <li key={id} className="list-group-item">
            <button className="btn btn-primary btn-block" type="button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Channels);
