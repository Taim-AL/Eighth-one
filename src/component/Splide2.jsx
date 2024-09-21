import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AOS from 'aos';
///////////image
import img1 from '../assets/images/testimonials/testimonials-1.jpg';
import img2 from '../assets/images/testimonials/testimonials-2.jpg';
import img3 from '../assets/images/testimonials/testimonials-3.jpg';
import img4 from '../assets/images/testimonials/testimonials-4.jpg';
import img5 from '../assets/images/testimonials/testimonials-5.jpg';
import { Col, Row } from 'react-bootstrap';
import Card3 from './Card3';

export function Slider() {
    
    const data=[
        {
            img:img1,
            name:"Saul Goodman",
            work:"Ceo & Founder",
            about:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        },
        {
            img:img2,
            name:"Sara Wilsson",
            work:"Designer",
            about:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },
        {
            img:img3,
            name:"Jena Karlis",
            work:"Store Owner",
            about:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
        },
        {
            img:img4,
            name:"Matt Brandon",
            work:"Freelancer",
            about:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore."
        },
        {
            img:img5,
            name:"John Larson",
            work:"Entrepreneur",
            about:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore."
        },
    ]
  AOS.init();
  
  return (
    <Splide  options={ { rewind: true ,type:'loop' ,arrows:false ,pagination:true,autoplay:true,perPage:3,focus:"center" ,breakpoints:{1400 :{perPage:1}}} } aria-label="React Splide Example" style={{marginTop:"7rem",marginBottom:"3rem"}} >
            
            {
                data.map((e)=>{
                    return(<>
                    <SplideSlide>
                        <Row className='mx-0 mb-5 p-3'>
                            <Col md='12'>
                                <Card3 img={e.img} name={e.name} work={e.work} about={e.about}/>
                            </Col>
                        </Row>
                    </SplideSlide>
                    </>)
                })
            }
    </Splide>
  );
}