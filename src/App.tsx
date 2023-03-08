import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { ChevronLeft } from 'react-bootstrap-icons';

import DataList from './components/DataList';

import './App.scss';

function App() {
  return (
    <Container fluid className="px-0">
      <Row className="top__nav align-items-center">
        <Col>
          <Button>
            <ChevronLeft color="#1276FF" size={16} />
          </Button>
        </Col>
        <Col>
          <div className="input-group mr-5">
            <span className="input-group-text bg-transparent">
              <FiSearch size="1.5em" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 "
              placeholder="Search datasets"
              aria-label="Search datasets"
            />
          </div>
        </Col>
      </Row>
      <DataList />
    </Container>
  );
}

export default App;
