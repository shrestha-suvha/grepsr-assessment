import React from 'react';
import { Row ,Col, Container} from 'react-bootstrap';

import './App.scss';
import * as Icon from 'react-bootstrap-icons';




function App() {
  
  return (
    <Container>
 <Row className='nav-header' > 
 <Col>
 <span className='back-icon'>
 <Icon.ChevronLeft color="#1276FF" size={16} />


 </span>
  
 </Col>
 
  <Col>
  <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <Icon.Search   size={10}/>
    <input type="text" className="form-control" placeholder="Search datasets" >
   
    </input>
  </div>
  </Col>
 </Row>
 </Container>
  );
}

export default App;
