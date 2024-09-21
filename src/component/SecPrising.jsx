import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
///////icon
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SendIcon from '@mui/icons-material/Send'; 
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

export default ()=>{
    AOS.init();
    return(<>
    <div style={{backgroundColor:"#f6f6f6",paddingTop:"2rem",paddingBottom:"4.7rem"}}>
            <div  className='mb-5' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
                <h1 className='h1-about mt-5'>Prising</h1>
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
            <Row  className='mx-0' style={{padding:"0rem 5rem 5rem 5rem",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}} >
        <Col md='7' lg='4' sx='12' className='p-3 pris1 shadow' data-aos="fade-down-right" data-aos-duration="1000" >
            <h5 className='h5-prising'>Free Plan</h5>
            <div style={{display:"flex",justifyContent:"center",marginTop:"0.5rem"}}>
            <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #57e5d492",borderRadius:"50%"}}>
                <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #1a9082d1",borderRadius:"50%"}}>
                    <ViewInArOutlinedIcon className='icon-prising'/>
                </div>
                </div>
            </div>
            <h6 className='h6-prising'>
                <strong className='str-prising'>$0</strong>
                / month
            </h6>
            <div className='d-flex ' style={{marginTop:"2rem"}}>
                <CheckIcon className='check-icon '/>
                <p className='par-prising'>Quam adipiscing vitae proin</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Nec feugiat nisl pretium</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Nulla at volutpat diam uteera</p>
            </div>
            <div className='d-flex'>
                <ClearIcon className='close-icon'/>
                <p className='par-prising2'>Pharetra massa massa ultricies</p>
            </div>
            <div className='d-flex'>
                <ClearIcon className='close-icon'/>
                <p className='par-prising2'>Massa ultricies mi quis hendrerit</p>
            </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"2.5rem"}}>
                <button className='but-prising'>Buy Now</button>
            </div>
        </Col>
        <Col md='7' lg='4' sx='12' className='p-3 pris2 shadow' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-back">

        <h5 className='h5-prising mt-5'>Business Plan</h5>
            <div style={{display:"flex",justifyContent:"center",marginTop:"0.5rem"}} className='mt-3'>
            <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #57e5d492",borderRadius:"50%"}}>
                <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #1a9082d1",borderRadius:"50%"}}>
                    <AirplanemodeActiveIcon className='icon-prising'/>
                </div>
                </div>
            </div>
            <h6 className='h6-prising mt-3'>
                <strong className='str-prising'>$29</strong>
                / month
            </h6>
            <div className='d-flex ' style={{marginTop:"4rem"}}>
                <CheckIcon className='check-icon '/>
                <p className='par-prising'>Quam adipiscing vitae proin</p>
            </div>
            <div className='d-flex' style={{marginTop:"0.3rem"}}>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Nec feugiat nisl pretium</p>
            </div>
            <div className='d-flex' style={{marginTop:"0.3rem"}}>
                <CheckIcon className='check-icon' />
                <p className='par-prising'>Nulla at volutpat diam uteera</p>
            </div>
            <div className='d-flex' style={{marginTop:"0.3rem"}}>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Pharetra massa massa ultricies</p>
            </div>
            <div className='d-flex' style={{marginTop:"0.3rem"}}>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Massa ultricies mi quis hendrerit</p>
            </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"4rem",marginBottom:"3rem"}}>
                <button className='but-prising' style={{padding:"0.6rem 2.6rem 0.6rem 2.6rem"}}>Buy Now</button>
            </div>

        </Col>
        <Col md='7' lg='4' sx='12' className='p-3 pris1 shadow' data-aos="fade-down-left" data-aos-duration="1000" data-aos-easing="ease-in-back">
        <h5 className='h5-prising'>Developer Plan</h5>
            <div style={{display:"flex",justifyContent:"center",marginTop:"0.5rem"}}>
            <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #57e5d492",borderRadius:"50%"}}>
                <div style={{display:"inline-block",justifyContent:"center",border:"7px solid #1a9082d1",borderRadius:"50%"}}>
                    <SendIcon className='icon-prising'/>
                </div>
                </div>
            </div>
            <h6 className='h6-prising'>
                <strong className='str-prising'>$49</strong>
                / month
            </h6>
            <div className='d-flex ' style={{marginTop:"2rem"}}>
                <CheckIcon className='check-icon '/>
                <p className='par-prising'>Quam adipiscing vitae proin</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Nec feugiat nisl pretium</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Nulla at volutpat diam uteera</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Pharetra massa massa ultricies</p>
            </div>
            <div className='d-flex'>
                <CheckIcon className='check-icon'/>
                <p className='par-prising'>Massa ultricies mi quis hendrerit</p>
            </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"2.5rem"}}>
                <button className='but-prising'>Buy Now</button>
            </div>
        </Col>
    </Row>
            </div>
    
    
    
    
    </>)
}