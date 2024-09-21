import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AOS from 'aos';
///////////image
import img1 from '../assets/images/hero-img.svg';
import img2 from '../assets/images/stats-img.svg';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export function Slider() {
  AOS.init();
  const imag=[
    {img:img1},
    {img:img2},
  ]
  return (
    <Splide options={ { rewind: true ,type:'loop' ,arrows:false ,pagination:true,autoplay:true,perPage:1} } aria-label="React Splide Example" style={{marginBottom:"3rem",height:"100%"}}>
      {imag.map((e)=>{
        return(
          <>
          <SplideSlide>
            <div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem"}}>
                    <img src={e.img} className='w-75 mt-5' alt="" />
                </div>
              <h6 className='h6-register1'>Impact <EmojiEmotionsIcon/></h6>
              <p className='par-register'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sed ducimus magnam blanditiis quod! Odit deleniti dolorum excepturi numquam temporibus?</p>
            </div>
          </SplideSlide>    
          </>
        )
      })}
      
    </Splide>
  );
}