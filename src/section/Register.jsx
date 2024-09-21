import React, { useState } from 'react';
import CollapsibleExample from '../component/NavBar';
import { Col, Row } from 'react-bootstrap';
import { Slider } from '../component/Splide4';
import AndroidIcon from '@mui/icons-material/Android';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import AOS from 'aos';
import { PuffLoader } from 'react-spinners';

export default ()=>{
    AOS.init();
    const [email ,setEmail ]= useState('');
    const [password ,setPassword ]= useState('');
    const [confirm ,setConfirm ]= useState('');
    const navigate = useNavigate();
    function submit(){
        axios.post('https://jsonplaceholder.typicode.com/users',{
            email : email ,
            lat : password,
            lng: confirm
        }).then((req)=>{
            console.log(req.data);
            if(req.status === 201){
                navigate('/');
                alert('Welcom In Impact (:')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(<>
    
    
    <CollapsibleExample/>
    
    <Row className='mx-0'>
        <Col md='6' className='register1'></Col>
        <Col md='6'></Col>
    </Row>
    
    <Row className='mx-0'>

        <Col md='1'></Col>
        <Col md='10'>

        <Row className='mx-0 shadow register2' data-aos="flip-down" data-aos-duration="1000" data-aos-easing="ease-in-back">
            <Col md='6' >
                <Slider/>
            </Col>
            <Col md='6' style={{paddingTop:"3rem",backgroundColor:"white"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <PuffLoader color= '#1cceba' size='90' className='spinner'/>
                    <AndroidIcon className='icon-register'/>
                </div>
                <h5 className='h5-register'>Hello Again !</h5>
                <p className='par-register2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tempore saepe distinctio eius cum ullam.</p>
                <div style={{padding:"1rem 3rem 1rem 3rem"}}>
                    <input className='input-register shadow' type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input className='input-register shadow' type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input className='input-register shadow' type="password" placeholder='Confirm Password' onChange={(e)=>{setConfirm(e.target.value)}}/>
                    
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className='but-register shadow' onClick={submit}>Login</button>
                </div>
                <p className='par-register2'>Dont have an account yet ? <a href='#home' className='a-register'>Sing Up</a></p>
            </Col> 
        </Row>

        </Col>
        <Col md='1'></Col>

    </Row>
    <Footer/>
    </>)
}