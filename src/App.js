import logo from './logo.svg';
import './App.css';
import About from './about';
import Navbar from './navbar';
import Header from './header';
import Services from './services'
import Project from './project';
import Contact from './contact';
import Skills from './skills';
import Aos from 'aos'
import 'aos/dist/aos.css';
import moon from './icon-moon.svg';
import sun from './icon-sun.svg';
import { useEffect,useState} from 'react'


function App() {
  const [img,setimg] = useState(false);
  const [bg,setbg] = useState(false)
  const changeimg = ()=>{
    setimg(!img);
    setbg(!bg);
  }
  

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={bg ? 'appchange': 'App'}>
    
<div className='imgs'>
  <div className='ci'>
  <img src={img ? moon:sun} onClick={()=>changeimg()}/>
  
  </div>
  
</div>
   
   <Header />
   <About />
   <Services id='services' /><br/>
  
   <Project />
  
   <Skills />
   <Contact />
  
  
    </div>
  );
}

export default App;
