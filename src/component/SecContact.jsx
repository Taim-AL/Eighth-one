import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
//////////////////icon
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default()=>{
    const navigate = useNavigate();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [subuect , setSubject] = useState('');
    const [message , setMessage] = useState('');
    function sendAxios(){
        axios.post('https://jsonplaceholder.typicode.com/users',{
            username : name,
            email: email,
            catchPhrase : subuect ,
            bs : message
        }).then((req)=>{
            console.log(req.data);
            if(req.status === 201){
                navigate('/')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(<>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back" className='mb-5'>
    <h1 className='h1-about mt-5'>Contact</h1>
    <Row className='mx-0'>
        <Col md='4'></Col>
        <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className='btn1'></div>
        </Col>
        <Col md='4'></Col>
    </Row>
    <p className='par-about'>
    Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop
    </p>
    </div>
    <Row className='mx-0'>
        <Col md='1'></Col>
        <Col md='10'>

        <Row className='mx-0 shadow' style={{borderRadius:"15px",marginBottom:"3rem",overflow:"hidden"}}>
        <Col md='5' className='contact-1 p-3'>
            <div style={{display:"flex",alignItems:"center"}} className='p-3 card-con'>
                <LocationOnOutlinedIcon className='icon-contact'/>
                <div>
                    <p className='par-contact'>
                        <strong>Location:</strong><br/>A108 Adam Street, New York, NY 535022
                    </p>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center"}} className='p-3 card-con'>
                <EmailOutlinedIcon className='icon-contact'/>
                <div>
                    <p className='par-contact'>
                        <strong>Email:</strong><br/>info@example.com
                    </p>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center"}} className='p-3 card-con'>
                <PhoneIphoneOutlinedIcon className='icon-contact'/>
                <div>
                    <p className='par-contact'>
                        <strong>Call:</strong><br/>+1 5589 55488 55
                    </p>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center"}} className='p-3 card-con'>
                <WatchLaterOutlinedIcon className='icon-contact'/>
                <div>
                    <p className='par-contact'>
                        <strong>Open Hours:</strong><br/>Mon-Sat: 11AM - 23PM
                    </p>
                </div>
            </div>
        </Col>
        <Col md='7' className='contact-2 p-3'>
            <Row className='mx-0'>
                <Col md='6'>
                    <input type="text" placeholder='Your Name' className='input1' onChange={(e)=>{setName(e.target.value)}}/>
                </Col>
                <Col md='6'>
                    <input type="email" placeholder='Your Email' className='input1' onChange={(e)=>{setEmail(e.target.value)}}/>
                </Col>
            </Row>
            <Row className='mx-0'>
                <Col md='12'>
                    <input type="text" placeholder='Subject' className='input1' onChange={(e)=>{setSubject(e.target.value)}}/>
                </Col>
            </Row>
            <Row className='mx-0'>
                <Col md='12'>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='input1' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </Col>
            </Row>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button className='but-conact' onClick={sendAxios}>Send Message</button>
            </div>
        </Col>
    </Row>

        </Col>
        <Col md='1'></Col>
    </Row>
    </div>
    
    </>)
}