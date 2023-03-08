import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiFontColor } from 'react-icons/bi';

import './App.scss';

const tableData = [
  { id: 0, name: 'Available' },
  { id: 1, name: 'Ready' },
  { id: 2, name: 'Started' },
];

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped borderless responsive>
            <thead>
              <tr>
                <th>
                  <FaHashtag style={{ color: 'red', marginRight: '4px', fontSize: 16 }} />
                  geo_id
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
                <th>
                  <BiFontColor style={{ marginLeft: '4px', color: 'red', fontSize: 16 }} />
                  location
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
                <th>
                  <FaHashtag style={{ color: 'red', marginRight: '4px', fontSize: 16 }} />
                  contact_no
                  <AiOutlineInfoCircle style={{ marginLeft: '4px' }} />
                </th>
              </tr>
            </thead>
            <tbody className="ft-table">
              {tableData?.map(item => (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
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
                <th color={'#D2DAE5'}>column name</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="ft-table">
              {tableData?.map(item => (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
