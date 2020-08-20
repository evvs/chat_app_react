import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentChannel } from '../slices/channels';
import AddChannelButton from "./AddChannelButton";

const mapStateToProps = ({ channels }) => ({ channels });
const mapActionsToProps = {
  setChannel: setCurrentChannel,
};

const Channels = (props) => {
  const { channels: { allChannels, currentChannel }, setChannel } = props;
  const changeChannelHandler = (id) => (event) => {
    event.preventDefault();
    setChannel({ id });
  };

  const buttons = allChannels.map(({ name, id}) => (
    <Button key={id} active={currentChannel === id} onClick={changeChannelHandler(id)} name={name}>
      {name}
    </Button>
  ));
  return (
    <div>
      <div className="text-muted text-center">Channels</div>
      <AddChannelButton />
      <ButtonGroup vertical className="d-flex">
        {buttons}
      </ButtonGroup>
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(Channels);
