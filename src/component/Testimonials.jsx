import React from 'react';
import { Col, Row } from 'react-bootstrap'; 
import { Slider } from './Splide2';

export default()=>{
    return(<>
    
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back" className='mb-5'>
    <h1 className='h1-about mt-5'>Testimonials</h1>
    <Row className='mx-0'>
        <Col md='4'></Col>
        <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='btn1'></div>
        </Col>
        <Col md='4'></Col>
    </Row>
    <p className='par-about'>
        Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam
    </p>
    </div>
    
    <Slider/>
    </>)
}