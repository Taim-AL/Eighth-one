import React from 'react';
//////////////images
import img1 from '../assets/images/portfolio/product-1.jpg';
import img2 from '../assets/images/portfolio/product-2.jpg';
import img3 from '../assets/images/portfolio/product-3.jpg';
import { Col, Row } from 'react-bootstrap';
import Card4 from './Card4';

export default ()=>{
    const data =[
        {
            img:img1,
            title:"Product 1",
            dur:'300'
        },
        {
            img:img2,
            title:"Product 2",
            dur:'600'
        },
        {
            img:img3,
            title:"Product 3",
            dur:'900'
        },
    ]
    return(<>
    
    <Row className='mx-0' style={{padding:"0rem 5rem 0rem 5rem"}}>

        {
            data.map((e)=>{
                return(<>
                <Col lg='4' md='6' sx='12' className='mt-5'>
                    <Card4 img={e.img} title={e.title} dur={e.dur}/>
                </Col>
                
                </>)
            })
        }

    </Row>
    
    
    
    
    </>)
}