import React, { FC } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineFontColors } from 'react-icons/ai';
import ProgressBar from 'react-bootstrap/ProgressBar';

const tableData = [
  { name: 'Geo Id', description: 'Available' },
  { name: 'Zip Code', description: 'Ready' },
  { name: 'Contact', description: 'Started' },
  { name: 'Geo Id', description: 'Available' },
  { name: 'Zip Code', description: 'Ready' },
  { name: 'Contact', description: 'Started' },
  { name: 'Geo Id', description: 'Available' },
  { name: 'Zip Code', description: 'Ready' },
  { name: 'Contact', description: 'Started' },
];

const DataList: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
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
                {tableData?.map(item => (
                  <tr key={item?.name}>
                    <td>{item?.name}</td>
                    <td>{item?.name}</td>
                    <td>{item?.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>

        <Col>
          <div className="table-wrapper border rounded-1">
            <Table className="fs-esm ">
              <thead>
                <tr>
                  <th className="table-header">Column name</th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody className="">
                {tableData?.map(item => (
                  <tr key={item?.name}>
                    <td>
                      <Row>
                        <Col>
                          <span className="">{item?.name}</span>
                          <p className="text-muted"># Integer</p>
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <Row>
                        <Col>
                          <div style={{ color: '#1B2F50' }}>{item?.description}</div>
                          <span className="fill-rate">Fillrate :10%</span>

                          <ProgressBar now={70} visuallyHidden className="bg-transparent" />
                        </Col>
                      </Row>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DataList;
