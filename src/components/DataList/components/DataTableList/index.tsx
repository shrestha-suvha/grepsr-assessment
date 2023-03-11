import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineFontColors } from 'react-icons/ai';
import { IDataTableListProps } from './types';

const DataTableList: FC<IDataTableListProps> = ({ dataSetList }) => {
  return (
    <div className="table-wrapper">
      <Table striped borderless className="fs-sm" style={{ maxHeight: '200px' }}>
        <thead>
          <tr>
            <th>
              <FaHashtag className="table__icon--hash " />
              <span className="fw-bold">geo_name</span>
              <AiOutlineInfoCircle className="table__icon--info" />
            </th>
            <th>
              <AiOutlineFontColors className="table__icon--hash " />
              <span className="fw-bold">location</span>
              <AiOutlineInfoCircle className="table__icon--info" />
            </th>
            <th>
              <FaHashtag className="table__icon--hash" />
              <span className="fw-bold">contact_no</span>
              <AiOutlineInfoCircle className="table__icon--info" />
            </th>
          </tr>
        </thead>
        <tbody className="fs-sm">
          {(dataSetList || []).map(dataSet => (
            <tr key={dataSet.id}>
              <td>{dataSet.geo_id}</td>
              <td>{dataSet.location}</td>
              <td>{dataSet.contact_no}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTableList;
