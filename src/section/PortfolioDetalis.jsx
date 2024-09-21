import React from 'react';
import CollapsibleExample from '../component/NavBar';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Slider } from '../component/Splide3';
import img from '../assets/images/testimonials/testimonials-2.jpg';
import Footer from '../component/Footer';
import AOS from 'aos';

export default ()=>{
    const navigate = useNavigate();
    AOS.init();
    return(<>
    
    
    <CollapsibleExample/>
    <Row className='mx-0 btn1-blog' data-aos="fade-down" data-aos-duration="1000">
        
        <Col md='3'></Col>
        
        <Col md='6'>
            <h1 className='h1-blog'>Portfolio Details</h1>
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
            <h4 className='h4-2'>/ Portfolio Details</h4>
        </Col>
        
        <Col md='6'></Col>
    
    </Row>
    
    </Row>
    
    <div style={{padding:"6rem"}}>
        <Slider/>
    </div>
    <Row className='mx-0' style={{padding:"0rem 6rem 6rem 6rem"}}>
        
        <Col md='8' style={{paddingRight:"2.4rem"}}>
            <h5 className='h5-details'>This is an example of portfolio detail</h5>
            <p  className='par-details'>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
            <p className='par-details'>Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>
            <div className='p-3'>
                <p className='par-details'>
                    <strong className='str-details'>"</strong>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <strong className='str-details'>"</strong>
                </p>
                <div style={{display:'flex',justifyContent:"left",alignItems:"center"}}>
                    <img className='img-splide2' src={img} alt="" />
                    <div style={{marginLeft:"1rem"}}>
                        <h5 style={{fontSize:"1.4rem"}}>Sara Wilsson</h5>
                        <p  style={{color:"#6f6f6f",fontSize:"1rem"}}>Designer</p>
                    </div>
                </div>
            </div>
            <p className='par-details'>Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
            <p className='par-details'>Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
        </Col>
        
        <Col md='4'>
        <h5 className='h5-details'>Project information</h5>
        <div className='bor-down'></div>
        <p style={{color:"#6f6f6f",fontSize:"0.8rem",margin:"1.4rem 0rem -2px 0rem"}}>CATEGORY</p>
        <h6 >Web design</h6>
        <p style={{color:"#6f6f6f",fontSize:"0.8rem",margin:"1.4rem 0rem -2px 0rem"}}>CLIENT</p>
        <h6 >ASU Company</h6>
        <p style={{color:"#6f6f6f",fontSize:"0.8rem",margin:"1.4rem 0rem -2px 0rem"}}>PROJECT DATE</p>
        <h6 >01 March, 2020</h6>
        <p style={{color:"#6f6f6f",fontSize:"0.8rem",margin:"1.4rem 0rem -2px 0rem"}}>PROJECT URL</p>
        <a href='#home' className='a-details'>
        <h6 >www.example.com</h6>
        </a>
        <div style={{display:'flex',justifyContent:"left",alignItems:"center"}}>
            <button className='but-visit'>
                Visit Website
            </button>
        </div>
        </Col>
    
    </Row>
    <Footer/>
    </>)
}