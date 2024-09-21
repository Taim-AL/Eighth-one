import React from 'react';
import CollapsibleExample from '../component/NavBar';
import SecTeam1 from '../component/SecTeam1';
import Footer from '../component/Footer';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

export default ()=>{
    const navigate = useNavigate();
    AOS.init();
    return(<>
    
    
    <CollapsibleExample/>
    <Row className='mx-0 btn1-blog' data-aos="fade-down" data-aos-duration="1000">
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-blog'>Team</h1>
            <p className='par-blog'>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
            </p>
        </Col>
        
        <Col md='3'></Col>
        <Row className='mx-0' style={{backgroundColor:"#f6f6f6"}}>
        
        <Col md='6' style={{display:"flex"}}>
            <a onClick={()=>{
                navigate('/')
            }}>
                <h4 className='h4-2' style={{marginLeft:"1rem",color:"#008374",cursor:"pointer"}}>Home</h4>
            </a>
            <h4 className='h4-2'>/  Team</h4>
        </Col>
        
        <Col md='6'></Col>
    
    </Row>
    
    </Row>
    <SecTeam1/>
    <Footer/>
    
    
    </>)
}