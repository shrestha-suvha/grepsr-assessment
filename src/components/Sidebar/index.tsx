import React, { FC, useState } from 'react';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { HiDatabase } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';
import Collapse from 'react-bootstrap/Collapse';
import { Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

const Sidebar: FC = () => {
  const [open, setOpen] = useState(false);
  const [addData, setAddData] = useState(false);
  return (
    <>
      <div className="side_nav">
        <div className="d-flex justify-content-between p-1 side_nav__item--active">
          <div className="ms-2">
            <AiFillHome size="1.1em" color="#1276ff" className="d-inline" />
            <span className="fw-bold text-info fs-esm ps-2">Sample data 1</span>
            <div className="fs-esm ps-4 mt-1 text-muted">105 K records</div>
          </div>
          <div className="pt-2 me-2">
            <BsThreeDotsVertical color="gray" className="side_nav__icon--active" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4">
          <span>
            <BiChevronRight size={'1em'} className="side_nav__icon--expand" />
            <span className="side_nav__item-title ps-1 ">Sample data</span>
          </span>
          <AiOutlinePlus className="side_nav__icon--add" id="dropdown-basic" onClick={() => setAddData(!addData)} />
        </div>

        <div className="side_nav__item--empty d-flex flex-column justify-content-center align-items-center">
          <div>
            <HiDatabase className="side_nav__icon--empty" />
          </div>
          <div className="pt-2">No sample data</div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4">
          <span>
            <BiChevronRight size={'1em'} className="side_nav__icon--expand" />
            <span className="side_nav__item-title ps-1 ">Dataset 2 </span>
          </span>
          <AiOutlinePlus className="side_nav__icon--add" />
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4">
          <span>
            {!open ? (
              <BiChevronRight size={'1em'} className="side_nav__icon--expand" onClick={() => setOpen(!open)} />
            ) : (
              <BiChevronDown size={'1em'} className="side_nav__icon--expand" onClick={() => setOpen(!open)} />
            )}
            <span className="side_nav__item-title ps-1 ">Dataset 3</span>
          </span>
        </div>
        <Collapse in={open}>
          <div className="example-collapse-text">
            <Row className="mb-2">
              <Col className="input-group input-group-sm ms-2 mt-3">
                <span className="input-group-text" style={{ backgroundColor: '#F5F6F9' }}>
                  <FiSearch size="1.5em" color="gray" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 top-nav__search me-2"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: '#F5F6F9' }}
                />
              </Col>
            </Row>
            <Row className="side_nav__item--inactive mt-5">
              <Col>
                <span className="fw-bold fs-esm ">Dataset 1</span>
                <div className="fs-esm mt-1 text-muted">105 K records</div>
              </Col>
              <Col className="d-flex justify-content-end mt-3 me-2">
                <BsThreeDotsVertical color="gray" />
              </Col>
            </Row>
            <Row className="side_nav__item--inactive">
              <Col>
                <span className="fw-bold fs-esm">Dataset 2</span>
                <div className="fs-esm mt-1 text-muted ">235 K records</div>
              </Col>
              <Col className="d-flex justify-content-end mt-3 me-2">
                <BsThreeDotsVertical color="gray" />
              </Col>
            </Row>
            <Row className="side_nav__item--inactive">
              <Col>
                <span className="fw-bold fs-esm">Dataset 3</span>
                <div className="fs-esm mt-1 text-muted">235 K records</div>
              </Col>
              <Col className="d-flex justify-content-end mt-3 me-2">
                <BsThreeDotsVertical color="gray" />
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    </>
  );
};
export default Sidebar;
