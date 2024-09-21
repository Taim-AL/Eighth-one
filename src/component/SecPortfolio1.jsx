import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import All from './All';
import App2 from './App2';
import Product from './Product';
import Branding from './Branding';
import Books from './Books';

export default ()=>{
    const [class1 , setClass1] = useState('but-portfolio2')
    const [class2 , setClass2] = useState('but-portfolio1')
    const [class3 , setClass3] = useState('but-portfolio1')
    const [class4 , setClass4] = useState('but-portfolio1')
    const [class5 , setClass5] = useState('but-portfolio1')
    const [comp,setComp] = useState(<All/>)
    return(
        <>
        
        <div style={{backgroundColor:"#f6f6f6",paddingTop:"2rem",paddingBottom:"4.7rem"}}>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back" className='mb-5'>
                <h1 className='h1-about mt-5'>Portfolio</h1>
                <Row className='mx-0'>
                    <Col md='4'></Col>
                    <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div className='btn1'></div>
                    </Col>
                    <Col md='4'></Col>
                </Row>
                <p className='par-about'>
                    Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
                </p>
            </div>
            <Row className='mx-0 mb-3'>
                
                <Col md='3'></Col>
                
                <Col md='6' style={{display:"flex",justifyContent:"center"}} data-aos="fade-up" data-aos-duration="1000">
                    <button className={class1} onClick={()=>{
                        setComp(<All/>);setClass1('but-portfolio2');setClass2('but-portfolio1');setClass3('but-portfolio1');setClass4('but-portfolio1');setClass5('but-portfolio1')}}
                        >All</button>
                    <button className={class2} onClick={()=>{
                        setComp(<App2/>);setClass1('but-portfolio1');setClass2('but-portfolio2');setClass3('but-portfolio1');setClass4('but-portfolio1');setClass5('but-portfolio1')}}
                        >App</button>
                    <button className={class3} onClick={()=>{
                        setComp(<Product/>);setClass1('but-portfolio1');setClass2('but-portfolio1');setClass3('but-portfolio2');setClass4('but-portfolio1');setClass5('but-portfolio1')}}
                        >Product</button>
                    <button className={class4} onClick={()=>{
                        setComp(<Branding/>);setClass1('but-portfolio1');setClass2('but-portfolio1');setClass3('but-portfolio1');setClass4('but-portfolio2');setClass5('but-portfolio1')}}
                        >Branding</button>
                    <button className={class5} onClick={()=>{
                        setComp(<Books/>);setClass1('but-portfolio1');setClass2('but-portfolio1');setClass3('but-portfolio1');setClass4('but-portfolio1');setClass5('but-portfolio2')}}
                        >Books</button>
                </Col>
                
                <Col md='3'></Col>
            
            </Row>
            {comp}
        </div>
        
        </>
    )
}