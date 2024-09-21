import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AOS from 'aos';
///////////image
import img1 from '../assets/images/portfolio/app-1.jpg';
import img2 from '../assets/images/portfolio/product-1.jpg';
import img3 from '../assets/images/portfolio/branding-1.jpg';
import img4 from '../assets/images/portfolio/books-1.jpg';

export function Slider() {
  AOS.init();
  const imag=[
    {img:img1},
    {img:img2},
    {img:img3},
    {img:img4},
  ]
  return (
    <Splide options={ { rewind: true ,type:'loop' ,arrows:true ,pagination:true,autoplay:true,perPage:1} } aria-label="React Splide Example" >
      {imag.map((e)=>{
        return(
          <>
          <SplideSlide>
              <img src={e.img} className='w-100' alt="" />
          </SplideSlide>    
          </>
        )
      })}
      
    </Splide>
  );
}