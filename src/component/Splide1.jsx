import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AOS from 'aos';
///////////image
import img1 from '../assets/images/clients/client-1.png';
import img2 from '../assets/images/clients/client-2.png';
import img3 from '../assets/images/clients/client-3.png';
import img4 from '../assets/images/clients/client-4.png';
import img5 from '../assets/images/clients/client-5.png';
import img6 from '../assets/images/clients/client-6.png';
import img7 from '../assets/images/clients/client-7.png';
import img8 from '../assets/images/clients/client-8.png';

export function Slider() {
  AOS.init();
  const imag=[
    {img:img1},
    {img:img2},
    {img:img3},
    {img:img4},
    {img:img5},
    {img:img6},
    {img:img7},
    {img:img8},
  ]
  return (
    <Splide data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-back" options={ { rewind: true ,type:'loop' ,arrows:false ,pagination:false,autoplay:true,perPage:6,breakpoints:{1400:{perPage:3}}} } aria-label="React Splide Example" style={{marginTop:"7rem"}} >
      {imag.map((e)=>{
        return(
          <>
          <SplideSlide>
              <img src={e.img} className='img-splide' alt="" />
          </SplideSlide>    
          </>
        )
      })}
      
    </Splide>
  );
}