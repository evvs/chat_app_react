import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from './Channels';
import Messages from './Messages';
import SendMessageForm from './SendMessageForm';
import Modal from './modals/Modal';
import ErrorsContainer from './errors/ErrorsContainer';

const App = () => (
  <>
    <Container className="h-100">
      <Row className="h-100">
        <Col sm={3}>
          <Channels />
        </Col>
        <Col sm={8} className="d-flex flex-column justify-content-between border-left h-100">
          <Messages />
          <SendMessageForm />
        </Col>
      </Row>
    </Container>
    <Modal />
    <ErrorsContainer />
  </>
);

export default App;
