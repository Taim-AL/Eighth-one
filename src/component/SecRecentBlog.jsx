import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////////img
import img1 from '../assets/images/blog/blog-1.jpg';
import img2 from '../assets/images/blog/blog-2.jpg';
import img3 from '../assets/images/blog/blog-3.jpg';
import avatar1 from '../assets/images/blog/blog-author.jpg'
import avatar2 from '../assets/images/blog/blog-author-2.jpg'
import avatar3 from '../assets/images/blog/blog-author-3.jpg'
import Card5 from './Card5';

export default()=>{
    const data =[
        {
            img:img1,
            work:"Politics",
            about:"Dolorum optio tempore voluptas dignissimos in quo",
            avatar:avatar1,
            name:"Maria Doe",
            date:"Jan 1, 2022",
            dur:"300"
        },
        {
            img:img2,
            work:"Sports",
            about:"Nisi magni odit consequatur autem nulla dolorem",
            avatar:avatar2,
            name:"Allisa Mayer",
            date:"Jun 5, 2022",
            dur:"600"
        },
        {
            img:img3,
            work:"Entertainment",
            about:"Possimus soluta ut id suscipit ea ut in quo quia et soluta",
            avatar:avatar3,
            name:"Mark Dower",
            date:"Jun 22, 2022",
            dur:"900"
        },
    ]
    return(<>
    
    <div style={{backgroundColor:"#f6f6f6",paddingTop:"2rem",paddingBottom:"4.7rem"}}>
        <div  className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
            <h1 className='h1-about mt-5'>Recent Blog Posts</h1>
            <Row className='mx-0'>
                <Col md='4'></Col>
                <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className='btn1'></div>
                </Col>
                <Col md='4'></Col>
            </Row>
            <p className='par-about'>
                Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio
            </p>
        </div>
        <Row className='mx-0' style={{padding:"0rem 5rem 4rem 5rem",display:"flex",justifyContent:"center"}}>
            {
                data.map((e)=>{
                    return(<>
                    
                    <Col lg='4' md='9' sx='12' >
                        <Card5 img={e.img} work={e.work} about={e.about} avatar={e.avatar} name={e.name} date={e.date} dur={e.dur}/>
                    </Col>

                    </>)
                })
            }
        </Row>
    </div>
    
    
    </>)
}