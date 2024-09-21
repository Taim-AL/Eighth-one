import './assets/Style.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
/////////Section
import Home from './section/Home';
import About from './section/About';
import Services from './section/Services';
import Portfolio from './section/Portfolio';
import Team from './section/Team';
import Contact from './section/Contact';
import PortfolioDetalis from './section/PortfolioDetalis';
import Register from './section/Register';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>

      <Route index element={<Home/>}/>
      <Route element={<About/>} path={'about'}/>
      <Route element={<Services/>} path={'services'}/>
      <Route element={<Portfolio/>} path={'portfolio'}/>
      <Route element={<Team/>} path={'team'}/>
      <Route element={<Contact/>} path={'contact'}/>
      <Route element={<Register/>} path={'register'}/>
      <Route element={<PortfolioDetalis/>} path={'details'}/>

    </Routes>

    </BrowserRouter>



    </>
  );
}

export default App;