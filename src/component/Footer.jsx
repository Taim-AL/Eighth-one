import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default ()=>{
    return(<>
    
    <Row className='mx-0 footer'>
        
        <Col md='4'>
            <h1 className='h1-foot'>Impact</h1>
            <p className='par-foot'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className='d-flex'>
                    <TwitterIcon className='icon-foot'/>
                    <FacebookOutlinedIcon className='icon-foot'/>
                    <InstagramIcon className='icon-foot'/>
                    <LinkedInIcon className='icon-foot'/>
            </div>
        </Col>
        
        <Col md='4' style={{display:"flex" , justifyContent:"space-between"}}>
            <div>
                <h6 className='h6-foot' >Useful Links</h6>
                <ul className='ul-foot'>
                    <li><a href='#home' className='a-foot'>Home</a></li>
                    <li><a href='#home' className='a-foot'>About us</a></li>
                    <li><a href='#home' className='a-foot'>Services</a></li>
                    <li><a href='#home' className='a-foot'>Terms of service</a></li>
                    <li><a href='#home' className='a-foot'>Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h6 className='h6-foot'>Our Services</h6>
                <ul className='ul-foot' style={{marginLeft:"1.3rem"}}>
                    <li><a href='#home' className='a-foot'>Web design</a></li>
                    <li><a href='#home' className='a-foot'>Web Development</a></li>
                    <li><a href='#home' className='a-foot'>Product Managment</a></li>
                    <li><a href='#home' className='a-foot'>Marketing</a></li>
                    <li><a href='#home' className='a-foot'>Graphic Design</a></li>
                </ul>
            </div>
        </Col>
        
        <Col md='4'>
            <h6 className='h6-foot' style={{marginRight:"5rem"}}>Contact Us</h6>
            <div style={{display:'flex',justifyContent:"center",marginBottom:"3rem"}}>
                <div>
                    <p className='par-foot'>A108 Adam Street<br/>New York, NY 535022<br/>United States</p>
                    <p className='par-foot'><strong>Phone:</strong>+1 5589 55488 55<br/><strong>Email: </strong>info@example.com</p>
                </div>
            </div>
            
        </Col>
    
    </Row>
    <div style={{backgroundColor:"#008374",paddingBottom:"3rem"}}>

        <p className='par-foot' style={{textAlign:"center"}}>© Copyright <strong> Impact. </strong>All Rights Reserved <br/>Designed by BootstrapMade</p>

    </div>
    </>)
}