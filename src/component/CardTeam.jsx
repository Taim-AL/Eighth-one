import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

export default({img , title , work , dur})=>{
    AOS.init();
    return(<>
    
    <div className='p-3 shadow' style={{borderRadius:"15px",marginBottom:"1rem"}} data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-back">

        <img src={img} className='img-team' alt="" />

        <h5 className='h5-team'>{title}</h5>

        <p className='par-team'>{work}</p>

        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"1rem"}}>
            <TwitterIcon className='icon-team'/>
            <FacebookOutlinedIcon className='icon-team'/>
            <InstagramIcon className='icon-team'/>
            <LinkedInIcon className='icon-team'/>
        </div>

    </div>
    
    
    
    </>)
}