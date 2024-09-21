import React from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AOS from 'aos';

export default ({icon,title,about,dur})=>{
    AOS.init();
    return(<>
    <a href='#home' style={{textDecoration:"none",height:"100%"}} >
        <div className='p-5 card2' data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-back">
            <div style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
                <div>
                    <div className='btn-3'></div>
                    {icon}
                    <div>
                    <h4 className='h4-1'>{title}</h4>
                    <div className='bor-bottom2'></div>
                    </div>
                    <p className='par-ser1'>
                        {about}
                    </p>
                    <h5 className='h5-1'>
                        Read more <ArrowForwardOutlinedIcon className='arrow-icon'/>
                    </h5>
                </div>
            </div>
            
        </div>
    </a>
    
    </>)
}
