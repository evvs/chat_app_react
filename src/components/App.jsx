import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Messages from './Messages';
import SendMessageForm from './SendMessageForm'

const App = () => (
  <Container className="h-100">
    <Row className="h-100">
      <Col sm={3}><Channels /></Col>
      <Col sm={8} className="d-flex flex-column justify-content-between">
        <Messages />
        <SendMessageForm />
      </Col>
    </Row>
  </Container>
);

export default App;
