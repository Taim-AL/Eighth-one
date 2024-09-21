import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card2 from './Card2';
/////////icon 
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SensorsIcon from '@mui/icons-material/Sensors';
import TvIcon from '@mui/icons-material/Tv';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Testimonials from './Testimonials';

export default ()=>{
    const data =[
        {
            icon:<MonitorHeartOutlinedIcon className='icon-card'/>,
            title:'Nesciunt Mete',
            about:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            dur:'500'
        },
        {
            icon:<SensorsIcon className='icon-card'/>,
            title:"Eosle Commodi",
            about:'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
            dur:'900'
        },
        {
            icon:<TvIcon className='icon-card'/>,
            title:"Ledo Markt",
            about:'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
            dur:'1200'
        },
        {
            icon:<CropFreeOutlinedIcon className='icon-card'/>,
            title:"Asperiores Commodit",
            about:'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
            dur:'500'
        },
        {
            icon:<DateRangeOutlinedIcon className='icon-card'/>,
            title:"Velit Doloremque",
            about:'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
            dur:'900'
        },
        {
            icon:<CommentOutlinedIcon className='icon-card'/>,
            title:"Dolori Architecto",
            about:'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
            dur:'1200'
        },
    ]
    return(<>
    
    <div style={{backgroundColor:"#f6f6f6",paddingTop:"2rem"}}>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back" className='mb-5'>
    <h1 className='h1-about mt-5'>Our Services</h1>
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
            <Row className='mx-0'>
                {
                    data.map((e)=>{
                        return(
                            <>
                            
                            <Col lg='4' md='6' sx='12' className='mb-5 h-100'>
                                <Card2 icon={e.icon} title={e.title} about={e.about} dur={e.dur}/>
                            </Col>            
                            
                            </>
                        )
                    })
                }
            </Row>
        </Col>
        <Col md='1'></Col>
    </Row>
    
    </div>
    <Testimonials/>
    </>)
}