import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BiChevronLeft } from 'react-icons/bi';
import { CgCompressRight } from 'react-icons/cg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

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
              <div className="heading">US Starbucks locations</div>
            </Col>
          </Row>
          <Row className=" mt-2">
            <Col className="d-flex flex-row ">
              <Col md={3}> Sample Data</Col>
              <Col className="p-0">
                <Form.Select size={'sm'} className="w-75 ml-4">
                  <option>Dropdown main</option>
                </Form.Select>
              </Col>
            </Col>
            <Col className=" d-flex justify-content-end ">
              <Row>
                <Col className="align-item-center ">
                  <div
                    style={{ backgroundColor: '#F3F4F8', height: '32px', width: '32px' }}
                    className="rounded-2 d-inline-flex  justify-content-center  align-items-center "
                  >
                    <FiSearch color="gray" />
                  </div>
                  <div
                    style={{ backgroundColor: '#F3F4F8', height: '32px', width: '32px', marginLeft: '8px' }}
                    className="rounded-2 d-inline-flex  justify-content-center  align-items-center "
                  >
                    <CgCompressRight size={18} color="gray" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-2 justify-content-center">
            <Col className="d-flex flex-row ">
              <Col className="input-group input-group-sm p-2  d-block">
                <span className="input-group-text bg-transparent">
                  <input className="form-check-input " type="checkbox" value="table" name="checkbox" />
                  <label
                    className="form-check-label"
                    style={{ marginLeft: '8px', paddingRight: '4px' }}
                    htmlFor="flexRadioDefault1"
                  >
                    Table
                  </label>
                </span>
              </Col>

              <Col className="input-group input-group-sm p-2  d-block">
                <span className="input-group-text bg-transparent">
                  <input className="form-check-input " type="checkbox" value="schema" name="checkbox" checked />
                  <label className="form-check-label" style={{ marginLeft: '8px' }} htmlFor="flexRadioDefault1">
                    Schema
                  </label>
                </span>
              </Col>
              <Col className="input-group input-group-sm p-2  d-block ">
                <span className="input-group-text bg-transparent">
                  <input className="form-check-input" type="checkbox" value="option3" name="checkbox" />
                  <label className="form-check-label" style={{ marginLeft: '8px' }} htmlFor="flexRadioDefault1">
                    Option 3
                  </label>
                </span>
              </Col>
            </Col>
            <Col className="d-flex justify-content-end records mt-3">180k records | 35 columns</Col>
          </Row>

          <DataList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
