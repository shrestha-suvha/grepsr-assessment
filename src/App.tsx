import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BiChevronLeft } from 'react-icons/bi';
import { CgCompressRight } from 'react-icons/cg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DataList from './components/DataList';

function App() {
  return (
    <Container fluid className="p-0">
      <Row className="top__nav p-2 d-flex justify-content-center align-items-center">
        <Col>
          <div
            style={{ backgroundColor: '#eaf3ff', height: '24px', width: '24px' }}
            className="rounded-2 d-inline-flex  justify-content-center  align-items-center "
          >
            <BiChevronLeft size="1em" color="#1276ff" />
          </div>
          <small className="fw-bold text-color fs-4 ">Sample data 1</small>
        </Col>
        <Col>
          <div className="input-group mr-5 input-group-sm">
            <span className="input-group-text bg-transparent">
              <FiSearch size="1.5em" color="gray" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search datasets"
              aria-label="Search datasets"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>Left pannel</Col>

        <Col>
          <Row>
            <Col>
              <Tabs variant="pills" defaultActiveKey="tableOne" transition={false} id="data-table-detail">
                <Tab eventKey="tableOne" title="Data table 1"></Tab>
                <Tab eventKey="tableTwo" title="Data table 2"></Tab>
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="location-data">US Starbucks locations</div>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col>1</Col>
            <Col className=" d-flex justify-content-around">
              <Row>
                <Col className="align-item-center ">
                  <span style={{ backgroundColor: '#F3F4F8', width: '32px', height: '32px' }}>
                    <FiSearch color="gray" />
                  </span>
                </Col>
                <Col>
                  <span>
                    <CgCompressRight size={18} />
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>

          <DataList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
