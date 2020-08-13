import React from 'react';
import Channels from './Channels';
import Messages from './Messages';
import ModalWindow from './modals/ModalWindow';

const App = () => (
  <div className="d-flex h-100">
    <Channels />
    <Messages />
    <ModalWindow />
  </div>
);

export default App;
