import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChannel } from '../slices/channels';
import AddChannelButton from './AddChannelButton';
import { open } from '../slices/modal';

const OptionsButtons = (props) => {
  const {
    channelId, channelName, removable,
  } = props;
  const dispatch = useDispatch();

  const clickHandler = (type) => (event) => {
    event.stopPropagation();
    dispatch(open({
      type,
      id: channelId,
      name: channelName,
    }));
  };

  return (
    <div className="d-flex">
      <div tabIndex={0} role="button" title="Переименовать" className="px-2 text-warning" onClick={clickHandler('renameChannel')} onKeyPress={clickHandler}>r</div>
      {removable
        ? <div tabIndex={0} role="button" title="Удалить" className="px-2 text-danger" onClick={clickHandler('deleteChannel')} onKeyPress={clickHandler}>х</div>
        : <div title="Нельзя удалить" className="px-2 text-black-50">х</div>}
    </div>
  );
};

const Channels = () => {
  const dispatch = useDispatch();
  const allChannels = useSelector((state) => state.channels.allChannels);
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const { t } = useTranslation();

  const changeChannelHandler = (id) => (event) => {
    event.preventDefault();
    dispatch(setCurrentChannel({ id }));
  };

  const buttons = allChannels.map(({ name, id, removable }) => (
    <Button key={id} active={currentChannelId === id} onClick={changeChannelHandler(id)} name={name} className="d-flex justify-content-between">
      <div className="flex-grow-1 overflow-hidden">{name}</div>
      <div>
        <OptionsButtons
          channelId={id}
          channelName={name}
          removable={removable}
        />
      </div>
    </Button>
  ));
  return (
    <div className="d-flex flex-column">
      <div className="text-muted text-center">
        {t('channels')}
        {' '}
        <span title={t('channelsInfoIcon')}>
          <i className="fa fa-info-circle" aria-hidden="true" />
        </span>
      </div>
      <AddChannelButton />
      <div className="overflow-auto">
        <ButtonGroup vertical className="d-flex">
          {buttons}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Channels;
