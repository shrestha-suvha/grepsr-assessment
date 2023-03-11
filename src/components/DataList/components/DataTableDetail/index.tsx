import React, { FC } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { IDataTableDetailProps } from './types';

const DataTableDetail: FC<IDataTableDetailProps> = ({ dataSetColumnDetailList }) => {
  return (
    <>
      <div className="table-wrapper border rounded-1 ">
        <Table className="fs-esm ">
          <thead className="bg-white">
            <tr>
              <th className="table-header">Column name</th>
              <th className="table-header">Description</th>
            </tr>
          </thead>
          <tbody className="">
            {(dataSetColumnDetailList || []).map(dataSetColumnDetail => (
              <tr key={dataSetColumnDetail?.id}>
                <td>
                  <Row>
                    <Col>
                      <span className="">{dataSetColumnDetail?.columnName}</span>
                      <p className="text-muted"># Integer</p>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>
                      <div style={{ color: '#1B2F50' }}>{dataSetColumnDetail?.description}</div>
                      <span className="fill-rate ">{`Fillrate: ${dataSetColumnDetail?.fillRate}%`}</span>
                      <ProgressBar now={dataSetColumnDetail?.fillRate} max={100} className="mt-2" />
                    </Col>
                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default DataTableDetail;
