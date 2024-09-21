import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////////images
import img1 from '../assets/images/team/team-1.jpg';
import img2 from '../assets/images/team/team-2.jpg';
import img3 from '../assets/images/team/team-3.jpg';
import img4 from '../assets/images/team/team-4.jpg';
import CardTeam from './CardTeam';

export default ()=>{
    const team =[
        {
            img:img1,
            title:"Walter White",
            work:"Web Development",
            dur :"250"
        },
        {
            img:img2,
            title:"Sarah Jhinson",
            work:"Marketing",
            dur :"500"
        },
        {
            img:img3,
            title:"William Anderson",
            work:"Content",
            dur :"750"
        },
        {
            img:img4,
            title:"Amanda Jepson",
            work:"Accountant",
            dur :"1000"
        },
    ]
    return(<>
    
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back" className='mb-5'>
                <h1 className='h1-about mt-5'>Our Team</h1>
                <Row className='mx-0'>
                    <Col md='4'></Col>
                    <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div className='btn1'></div>
                    </Col>
                    <Col md='4'></Col>
                </Row>
                <p className='par-about'>
                    Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum
                </p>
            </div>
    
        <Row className='mx-0' style={{padding:"0rem 5rem 4rem 5rem"}}>

            {
                team.map((e)=>{
                    return(<>
                    
                    <Col md='6' lg='3' sx='12'>
                        <CardTeam img={e.img} title={e.title} work={e.work} dur={e.dur}/>
                    </Col>
                    
                    </>)
                })
            }

        </Row>
    
    
    </>)
}