import React from 'react';
import AOS from 'aos';

export default ({e})=>{
    AOS.init();
    return(<>
        <a href='#home' style={{textDecoration:"none"}}>
        <div className='card-1 shadow' style={{display:"flex",justifyContent:"center" , alignItems:"center"}} >
            <div>
                <div style={{display:"flex" , justifyContent:"center",alignItems:"center"}}>
                    {e.icon}
                </div>
                <h1 className='text-center h1-2'>{e.title}</h1>
            </div>
        </div> 
        </a>
    </>)
}