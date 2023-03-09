import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { CgCompressRight } from 'react-icons/cg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';

import DataList from './components/DataList';

function App() {
  return (
    <Container fluid>
      <Row className="top-nav ps-4 pe-5 d-flex justify-content-start align-items-center border-bottom">
        <Col className="ps-0 ">
          <div
            style={{ backgroundColor: '#eaf3ff', height: '24px', width: '24px' }}
            className="rounded-2 d-inline-flex  justify-content-center  align-items-center "
          >
            <BiChevronLeft size="1em" color="#1276ff" />
          </div>
          <span className="top-nav__title fw-bold fs-4 line-height-lg ps-2">Sample data 1</span>
        </Col>
        <Col className="">
          <div className="input-group  input-group-sm">
            <span className="input-group-text bg-transparent">
              <FiSearch size="1.5em" color="gray" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 top-nav__search"
              placeholder="Search datasets"
              aria-label="Search datasets"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={'col-sm-2 pe-0 m-2'}>
          <div className="side_nav">
            <div className="d-flex  justify-content-between  px-1 py-1 side_nav__item--active">
              <div className="ms-2">
                <AiFillHome size="1.1em" color="#1276ff" className="d-inline" />
                {/* <div className="fs-esm d-inline ps-2"> */}
                <span className="fw-bold text-info fs-esm ps-2">Sample data 1</span>
                <div className="fs-esm ps-4">105 K records</div>
                {/* </div> */}
              </div>
              <div className="pt-2 me-2">
                <BsThreeDotsVertical color="gray" className="side_nav__icon--active " />
              </div>
            </div>
            <div className="d-flex  justify-content-between  border-bottom">
              <div>
                <BiChevronRight size={'1em'} className={'side_nav__icon--expand'} />
                <span className="side_nav__item-title ps-1">Sample data</span>
              </div>
              <div>
                <AiOutlinePlus className="side_nav__icon--add" />
              </div>
            </div>
          </div>
        </Col>

        <Col className="border-start">
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
