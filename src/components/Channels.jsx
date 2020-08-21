import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentChannel } from '../slices/channels';
import AddChannelButton from './AddChannelButton';
import { open } from '../slices/modal';

const mapStateToProps = ({ channels }) => ({ channels });
const mapActionsToProps = {
  setChannel: setCurrentChannel,
  openModal: open,
};

const OptionsButtons = (props) => {
  const { channelId, channelName, openModal, removable } = props;

  const clickHandler = (type) => (event) => {
    event.stopPropagation();
    openModal({
      type,
      id: channelId,
      name: channelName,
    });
  };

  return (
    <div className="d-flex">
      <div className="px-2 text-success" onClick={clickHandler('renameChannel')}>r</div>
      {removable
        ? <div className="px-2 text-danger" onClick={clickHandler('deleteChannel')}>х</div>
        : <div className="px-2 text-black-50">х</div>
        }
    </div>
  );
};

connect(null, mapActionsToProps)(OptionsButtons);

const Channels = (props) => {
  const { channels: { allChannels, currentChannel }, setChannel, openModal } = props;
  const changeChannelHandler = (id) => (event) => {
    event.preventDefault();
    setChannel({ id });
  };

  const buttons = allChannels.map(({ name, id, removable}) => (
    <Button key={id} active={currentChannel === id} onClick={changeChannelHandler(id)} name={name} className="d-flex justify-content-between">
      <div className="flex-grow-1 overflow-hidden">{name}</div>
      <div>
      <OptionsButtons channelId={id} openModal={openModal} channelName={name} removable={removable}/>
    </div>
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
