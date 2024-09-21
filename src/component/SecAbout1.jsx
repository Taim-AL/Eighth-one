import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
//////////img
import img1 from '../assets/images/about.jpg';
import img2 from '../assets/images/about-2.jpg';
import img3 from '../assets/images/stats-img.svg';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import GrowExample from './Spinner';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Slider } from './Splide1';
import CountUp from 'react-countup';

export default ()=>{
    AOS.init();
    return(<>
    
    
    
    <Row className='mx-0 mt-3' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
        <Col md='1'></Col>
        <Col md='5'>
            <h1 className='h1-about2'>
                Voluptatem dignissimos provident quasi corporis
            </h1>
            <img src={img1} className='img1-about' alt="" />
            <p className='par-about2'>
            Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p className='par-about2'>
            Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
        </Col>
        <Col md='5' style={{paddingLeft:"5vh"}}>
            <p className='par-about2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{display:"flex"}}>
                <CheckCircleSharpIcon className='check-icon1'/>
                <p className='par-about2'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div style={{display:"flex"}}>
                <CheckCircleSharpIcon className='check-icon1'/>
                <p className='par-about2'>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
            </div>
            <div style={{display:"flex"}}>
                <CheckCircleSharpIcon className='check-icon1'/>
                <p className='par-about2'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <p className='par-about2'>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                <img src={img2} className='img1-about' alt="" />
                <a href='https://youtu.be/LXb3EKWsInQ' className='a-1'>
                    <PlayArrowIcon className='play-arrow' />
                    <GrowExample />
                </a>
            </div>
            
        </Col>
        <Col md='1'></Col>
        
    </Row>
    <Row className='mx-0 mt-5'>
        <Col md='1'></Col>
        <Col md='10' className='mt-3'>
            <Slider/>
        </Col>
        <Col md='1'></Col>
    </Row>
    <Row className='mx-0' style={{padding:"0px 2vh 0px 10vh"}} data-aos="fade-up" data-aos-duration="2000">
        
        <Col md='6' style={{marginTop:"5rem",marginBottom:"5rem"}}>
            <img src={img3} className='img3-about' alt="" />
        </Col>
        
        <Col md='6' style={{display:"flex",alignItems:"center",marginTop:"5rem",marginBottom:"5rem"}}>
            <div>
                <p className='par-about4'>
                <CountUp start={0} end={232} duration={5} enableScrollSpy={true} className='strong-1'/> 
                    <strong className='strong-2'>Happy Clients </strong>
                    consequuntur quae diredo para mesta
                </p>
                <hr/>
                <p className='par-about4'>
                <CountUp start={0} end={521} duration={5} enableScrollSpy={true} className='strong-1'/> 
                    <strong className='strong-2'>Projects</strong>
                    adipisci atque cum quia aut
                </p>
                <hr/>
                <p className='par-about4'>
                <CountUp start={0} end={453} duration={5}  enableScrollSpy={true} className='strong-1'/> 
                    <strong className='strong-2'>Hours Of Support </strong>
                    aut commodi quaerat
                </p>
                <hr/>
            </div>
        </Col>
        
    </Row>

    <Row className='mx-0'>
        
        <Col md='1'></Col>
        
        <Col md='10' className='end-about'  data-aos="zoom-out" data-aos-duration="1000">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:'11%'}} >
                <a href='https://youtu.be/LXb3EKWsInQ' className='a-1'>
                    <PlayArrowIcon className='play-arrow' />
                    <GrowExample />
                </a>
            </div>
            <h2 className='h2-about'>
                Call To Action
            </h2>
            <p className='par-endAbout'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
                <a href='#home'>
                    <button className='but-about'>
                        Call To Action
                    </button>
                </a>
                
            </div>
            
        </Col>
        
        <Col md='1'></Col>
    
    </Row>
    
    </>)
}

