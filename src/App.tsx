import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import DataList from './components/DataList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container fluid>
      <Navbar />
      <Row>
        <Col className="col-sm-2 pe-0 m-2">
          <Sidebar />
        </Col>

        <Col className="border-start">
          <DataList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
