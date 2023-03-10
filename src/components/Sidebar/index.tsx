import React, { FC } from 'react';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { HiDatabase } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

const Sidebar: FC = () => {
  return (
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
  );
};
export default Sidebar;
