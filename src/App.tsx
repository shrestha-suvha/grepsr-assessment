import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { CgCompressRight } from 'react-icons/cg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

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
          <Row>
            <Col>
              <Tabs variant="pills" defaultActiveKey="tableOne" transition={false} id="data-table-detail">
                <Tab
                  eventKey="tableOne"
                  title="Data table 1"
                  tabClassName="fs-sm rounded-0 bg-white border-bottom-3"
                ></Tab>
                <Tab
                  eventKey="tableTwo"
                  title="Data table 2"
                  tabClassName="fs-sm rounded-0 bg-white border-bottom-3"
                ></Tab>
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="heading ">US Starbucks locations</div>
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
                  <div className=" content--icon rounded-2 d-inline-flex  justify-content-center  align-items-center ">
                    <FiSearch color="gray" />
                  </div>
                  <div className="rounded-2 d-inline-flex  justify-content-center  align-items-center content--icon ms-2 me-4 ">
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
                  <label className="form-check-label input-label" htmlFor="flexRadioDefault1">
                    Table
                  </label>
                </span>
              </Col>

              <Col className="input-group input-group-sm p-2  d-block">
                <span className="input-group-text bg-transparent">
                  <input className="form-check-input " type="checkbox" value="schema" name="checkbox" checked />
                  <label className="form-check-label input-label" htmlFor="flexRadioDefault1">
                    Schema
                  </label>
                </span>
              </Col>
              <Col className="input-group input-group-sm p-2  d-block ">
                <span className="input-group-text bg-transparent">
                  <input className="form-check-input" type="checkbox" value="option3" name="checkbox" />
                  <label className="form-check-label input-label" htmlFor="flexRadioDefault1">
                    Option 3
                  </label>
                </span>
              </Col>
            </Col>
            <Col className="d-flex justify-content-end records mt-3 me-4">180k records | 35 columns</Col>
          </Row>
          <Row></Row>
          <DataList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
