import CollapsibleExample from '../component/NavBar';
import SecAbout1 from '../component/SecAbout1';
import SecHome1 from '../component/SecHome1';
import { useLocation } from 'react-router-dom';
import { Alert, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import SecServices1 from '../component/SecServices1';
import SecPortfolio1 from '../component/SecPortfolio1';
import SecTeam1 from '../component/SecTeam1';
import SecPrising from '../component/SecPrising';
import SecAccordion from '../component/SecAccordion';
import SecRecentBlog from '../component/SecRecentBlog';
import Footer from '../component/Footer';
import SecContact from '../component/SecContact';

export default ()=>{
    const location =useLocation()
    AOS.init();
    return(<>
    
    <CollapsibleExample/>
    <SecHome1/>
    <div data-aos="fade-up" data-aos-duration="1000" className='mb-5'>
    <h1 className='h1-about'>About Us</h1>
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
    <SecAbout1/>
    <SecServices1/>
    <SecPortfolio1/>
    <SecTeam1/>
    <SecPrising/>
    <SecAccordion/>
    <SecRecentBlog/>
    <SecContact/>
    <Footer/>
    </>)
}