import React, { FC } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiFontColor } from 'react-icons/bi';
import ProgressBar from 'react-bootstrap/ProgressBar';

const tableData = [
  { name: 0, description: 'Available' },
  { name: 1, description: 'Ready' },
  { name: 2, description: 'Started' },
];

const DataList: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped borderless responsive>
            <thead>
              <tr>
                <th>
                  <FaHashtag style={{ color: 'gray', marginRight: '4px', fontSize: 16 }} />
                  geo_name
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
                <th>
                  <BiFontColor style={{ marginLeft: '4px', color: 'gray', fontSize: 16 }} />
                  location
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
                <th>
                  <FaHashtag style={{ color: 'gray', marginRight: '4px', fontSize: 16 }} />
                  contact_no
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
              </tr>
            </thead>
            <tbody className="ft-table">
              {tableData?.map(item => (
                <tr key={item?.name}>
                  <td>{item?.name}</td>
                  <td>{item?.name}</td>
                  <td>{item?.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table responsive style={{ maxHeight: '10px' }}>
            <thead>
              <tr>
                <th className="table-header">Column name</th>
                <th className="table-header">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="ft-table">
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
                        <span className="fill-rate">Fillrate :80%</span>
                        <ProgressBar now={80} visuallyHidden style={{ height: '2px', marginTop: '4px' }} />
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DataList;
