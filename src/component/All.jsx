import React from 'react';
//////////////images
import img1 from '../assets/images/portfolio/app-1.jpg';
import img2 from '../assets/images/portfolio/product-1.jpg';
import img3 from '../assets/images/portfolio/branding-1.jpg';
import img4 from '../assets/images/portfolio/books-1.jpg';
import img5 from '../assets/images/portfolio/app-2.jpg';
import img6 from '../assets/images/portfolio/product-2.jpg';
import img7 from '../assets/images/portfolio/branding-2.jpg';
import img8 from '../assets/images/portfolio/books-2.jpg';
import img9 from '../assets/images/portfolio/app-3.jpg';
import img10 from '../assets/images/portfolio/product-3.jpg';
import img11 from '../assets/images/portfolio/branding-3.jpg';
import img12 from '../assets/images/portfolio/books-3.jpg';
import { Col, Row } from 'react-bootstrap';
import Card4 from './Card4';

export default ()=>{
    const data =[
        {
            img:img1,
            title:"App 1",
            dur:'300'
        },
        {
            img:img2,
            title:"Product 1",
            dur:'600'
        },
        {
            img:img3,
            title:"Branding 1",
            dur:'900'
        },
        {
            img:img4,
            title:"Books 1",
            dur:'300'
        },
        {
            img:img5,
            title:"App 2",
            dur:'600'
        },
        {
            img:img6,
            title:"Product 2",
            dur:'900'
        },
        {
            img:img7,
            title:"Branding 2",
            dur:'300'
        },
        {
            img:img8,
            title:"Books 2",
            dur:'600'
        },
        {
            img:img9,
            title:"App 3",
            dur:'900'
        },
        {
            img:img10,
            title:"Product 3",
            dur:'300'
        },
        {
            img:img11,
            title:"Branding 3",
            dur:'600'
        },
        {
            img:img12,
            title:"Books 3",
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