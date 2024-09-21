import React from 'react';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

export default ({img , title , dur})=>{
    AOS.init();
    const navigate = useNavigate();
    return(<>
    
    <div style={{borderRadius:"20px",overflow:"hidden"}} className='shadow card4' data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-back">
        <div style={{overflow:"hidden"}}>
            <img src={img} className='img-portfolio' />
        </div>
        <div className='p-3'>
        <h5 className='mt-3 h5-port' onClick={()=>{navigate('/details')}}>Lorem ipsum dolor sit amet consectetur.</h5>

        {/* <p style={{color:"#6f6f6f"}}>Lorem ipsum dolor sit amet consectetur.</p> */}
        </div>
    </div>
    
    </>)
}