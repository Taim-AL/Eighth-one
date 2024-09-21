import React from 'react';
import AOS from 'aos';

export default ({img , work , about , avatar , name , date , dur})=>{
    AOS.init();
    return(
        <>
        <a href='#home' style={{cursor:"pointer",textDecoration:"none",color:"black"}} data-aos="fade-up" data-aos-duration={dur} data-aos-easing="ease-in-back">
        <div className='card5 shadow' style={{marginBottom:"2rem"}}>
            <img src={img} style={{height:"50%"}} className='w-100' alt="" />
            <div className='p-3'>
                <p className='par1-card5'>{work}</p>
                <h5 className='h5-card5'>{about}</h5>
                <div style={{display:"flex", alignItems:"center"}}>
                    <img className='avatar-card5' src={avatar} alt="" />
                    <div>
                        <p style={{marginTop:"1.2rem"}}>{name}</p>
                        <p style={{color:"gray",fontSize:"13px",marginTop:"-1rem"}}>{date}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
        
        </>
    )
}