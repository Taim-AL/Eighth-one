import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ControlledAccordions from './Accord';
import AOS from 'aos';

export default ()=>{
    AOS.init();
    return(<>
    
    
    <Row className='mx-0' style={{padding:"3rem 5rem 3rem 5rem"}}>

        <Col md='4' style={{paddingRight:"3rem"}} data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-back">
            <h1 className='h1-accordion'>Frequently Asked <strong>Questions</strong></h1>
            <p className='par-accordion'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
        </Col>
        
        <Col md='8'>
            <ControlledAccordions/>
        </Col>

    </Row>
    
    
    
    </>)
}