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
import { HiDatabase } from 'react-icons/hi';

import DataList from './components/DataList';

function App() {
  return (
    <Container fluid>
      <Row className="top-nav ps-4 pe-4 d-flex justify-content-start align-items-center border-bottom">
        <Col className="ps-0 ">
          <div className="rounded-2 d-inline-flex  justify-content-center  align-items-center top-nav__back-arrow">
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
        <Col className="col-sm-2 pe-0 m-2">
          <div className="side_nav">
            <div className="d-flex  justify-content-between  px-1 py-1 side_nav__item--active">
              <div className="ms-2">
                <AiFillHome size="1.1em" color="#1276ff" className="d-inline" />
                <span className="fw-bold text-info fs-esm ps-2">Sample data 1</span>
                <div className="fs-esm ps-4 mt-1 text-muted">105 K records</div>
              </div>
              <div className="pt-2 me-2">
                <BsThreeDotsVertical color="gray" className="side_nav__icon--active " />
              </div>
            </div>
            <div className="d-flex  justify-content-between align-items-center border-bottom pb-2 mt-4">
              <span>
                <BiChevronRight size={'1em'} className="side_nav__icon--expand" />
                <span className="side_nav__item-title ps-1 ">Sample data</span>
              </span>

              <AiOutlinePlus className="side_nav__icon--add" />
            </div>
            <div className="side_nav__item--empty d-flex flex-column justify-content-center align-items-center">
              <div>
                <HiDatabase className="side_nav__icon--empty" />
              </div>
              <div className="pt-2">No sample data</div>
            </div>
            <div className="d-flex  justify-content-between align-items-center border-bottom pb-2 mt-4">
              <span>
                <BiChevronRight size={'1em'} className="side_nav__icon--expand" />
                <span className="side_nav__item-title ps-1 ">Dataset 2 </span>
              </span>
              <AiOutlinePlus className="side_nav__icon--add" />
            </div>
            <div className="d-flex  justify-content-between align-items-center border-bottom pb-2 mt-4">
              <span>
                <BiChevronRight size={'1em'} className="side_nav__icon--expand" />

                <span className="side_nav__item-title ps-1 ">Dataset 2 </span>
              </span>
              <AiOutlinePlus className="side_nav__icon--add" />
            </div>
          </div>
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
