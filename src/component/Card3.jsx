import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Rating } from '@mui/material';

export default ({img , name , work , about})=>{
    return(<>
    
    <div className='p-5 shadow' style={{borderRadius:"20px",height:"50vh"}}>
        {/* <Row className='mx-0'>
            <Col md='4' sx='4' lg='4'>
                <img className='img-splide2' src={img} alt="" />
            </Col>
            <Col md='6' sx='6' lg='6'>
                <h5>{name}</h5>
                <p style={{color:"#6f6f6f"}}>{work}</p>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
            </Col>
            <Col md='2'></Col>
        </Row> */}
        <div style={{display:'flex',justifyContent:"left",alignItems:"center"}}>
        <img className='img-splide2' src={img} alt="" />
        <div style={{marginLeft:"1rem"}}>
        <h5 style={{fontSize:"1.4rem"}}>{name}</h5>
                <p  style={{color:"#6f6f6f",fontSize:"1rem"}}>{work}</p>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} style={{fontSize:"1.2rem"}} readOnly />
        </div>
        </div>
        <p className='par-splide'>
            <strong style={{fontSize:"1.4rem",color:"#008374"}}>"</strong>
            {about}
            <strong style={{fontSize:"1.4rem",color:"#008374"}}>"</strong>
        </p>
    </div>
    
    
    </>)
}