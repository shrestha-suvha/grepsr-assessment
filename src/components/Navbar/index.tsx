import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BiChevronLeft } from 'react-icons/bi';

import { NavbarProps } from './types';

const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <Row
      className="top-nav ps-4 pe-4 d-flex justify-content-start align-items-center border-bottom"
      data-testid="navbar-1"
    >
      <Col className="ps-0 ">
        <div className="rounded-2 d-inline-flex  justify-content-center  align-items-center top-nav__back-arrow">
          <BiChevronLeft size="1em" color="#1276ff" />
        </div>
        <span className="top-nav__title fw-bold fs-4 line-height-lg ps-2">{title}</span>
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
  );
};
export default Navbar;
