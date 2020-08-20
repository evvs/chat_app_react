import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Messages from './Messages';
import SendMessageForm from './SendMessageForm';
import Modal from './modals/Modal';

const App = () => (
  <Container className="h-100">
    <Row className="h-100">
      <Col sm={3}>
        <Channels />
      </Col>
      <Col sm={8} className="d-flex flex-column justify-content-between border-left">
        <Messages />
        <SendMessageForm />
      </Col>
    </Row>
    <Modal />
  </Container>
);

export default App;
