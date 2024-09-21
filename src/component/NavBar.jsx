import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AOS from 'aos';

function CollapsibleExample() {
    AOS.init();
    const loc =[
        {
            title:"Home",
            to:"/"
        },
        {
            title:"About",
            to:"/about"
        },
        {
            title:"Services",
            to:"/services"
        },
        {
            title:"Portfolio",
            to:"/portfolio"
        },
        {
            title:"Team",
            to:"/team"
        },
        {
            title:"Register",
            to:"/register"
        },
        {
            title:"Contact",
            to:"/contact"
        },
    ]
  return (
    <>
    <Navbar collapseOnSelect expand="lg" fixed='top'className='nav1 shadow' data-aos="fade-down" data-aos-duration="500">
      <Container>
        <Navbar.Brand  className='impact' >Impact<strong style={{color:"#f85a40",fontSize:"35px",fontFamily:"cursive"}}>.</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            {loc.map((e)=>{
                return(
                    <>
                    
                    <NavLink e={e}/>
                    
                    </>
                )
            })}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{height:"4.5rem"}} id='home'></div>
    <a href='#home'>
    <button className='but-up' data-aos="fade-up">
        <ArrowUpwardIcon/>
    </button>
    </a>
    </>);
}

export default CollapsibleExample;