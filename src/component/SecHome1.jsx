import { Col, Row } from 'react-bootstrap';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import img from '../assets/images/hero-img.svg';
import AOS from 'aos';
///////////////icon
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Card1 from './Card1';


export default ()=>{
    AOS.init();
    const data =[
        {
            icon:<AirplayOutlinedIcon className='icon-2'/>,
            title:'Lorem Ipsum',
            dur:'500'
        },
        {
            icon:<DiamondOutlinedIcon className='icon-2'/>,
            title:'Sed ut perspiciatis',
            dur:'800'
        },
        {
            icon:<LocationOnOutlinedIcon className='icon-2'/>,
            title:'Magni Dolores',
            dur:'1000'
        },
        {
            icon:<GridViewOutlinedIcon className='icon-2'/>,
            title:'Nemo Enim',
            dur:'1200'
        },
    ]
    return(<>
    <Row className='mx-0 sec1 ' style={{direction:"rtl"}}>
        
        <Col md='1'></Col>

        <Col md='5'>
            <img data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-back" className='img-1' src={img} alt="" />
        </Col>
        
        <Col md='5' style={{paddingTop:"7rem"}} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="1000" >
            <h1 className='h1-1' >
                Welcome to Impact
            </h1>
            <p className='par-1'>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <div style={{display:"flex",justifyContent:"left"}}>
            
            <a href="https://youtu.be/LXb3EKWsInQ">
                <button className='but-2' >Watch Video<PlayCircleOutlinedIcon className='video-icon'/></button>
            </a>
            <a href='#home'>
                <button className='but-1'>Get Started</button>
            </a>
            </div>
        </Col>
        
        
    
        <Col md='1'></Col>

        <Row  className='mx-0 sec1-2'>
        {data.map((e)=>{
            return(<>
            
            <Col lg='3' md='6' sx='12' className='mb-5' data-aos="fade-up" data-aos-duration={e.dur}>
                <Card1 e={e}/>
            </Col>
            
            </>)
        })}
    </Row>

    </Row>
    
    </>)
}