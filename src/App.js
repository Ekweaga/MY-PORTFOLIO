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
import css from './frada.png'
import Typical from 'react-typical'


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
  <><section className="home">
    < div class='container flex'>
      <div className='left'>
      <div className='img'>
        <img src={css}/>
      </div>
      </div>
     <div className='right topMargin'>
<h1>I AM  A  <Typical
        steps={['FRONT-END DEV', 1000, 'WORDPRESS DEV', 1000, 'SEO EXPERT' , 1000]}
        loop={Infinity}
        wrapper="p"
      /></h1>
      <div className='socialIcon'>
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
      <p>Leveraging the power of computer vision, deep learning, machine learning,</p>
      <button className='primary-btn btn'>Contact Us</button>
     </div>
    </div>
    
   </section>
   <section className="branding">
<div className='container grid'>
  <div className='box flex'>
   <div className='text'><h1>01</h1></div>
   <div className='para'>
    <h2>WEB DESIGN</h2>
    <p>ssmsskdnfndkfkdidid kdwidjwdowodkwodkowdkowdk</p>
   </div>
  </div>
  <div className='box flex'>
   <div className='text'><h1>02</h1></div>
   <div className='para'>
    <h2>SEO</h2>
    <p>ssmsskdnfndkfkdidid kdwidjwdowodkwodkowdkowdk</p>
   </div>
  </div>
  <div className='box flex'>
   <div className='text'><h1>03</h1></div>
   <div className='para'>
    <h2>WEB DEV</h2>
    <p>ssmsskdnfndkfkdidid kdwidjwdowodkwodkowdkowdk</p>
   </div>
  </div>
  <div className='box flex'>
   <div className='text'><h1>04</h1></div>
   <div className='para'>
    <h2>MARKETING</h2>
    <p>ssmsskdnfndkfkdidid kdwidjwdowodkwodkowdkowdk</p>
   </div>
  </div>
  
</div>
   </section></> 
  );
}

export default App;
