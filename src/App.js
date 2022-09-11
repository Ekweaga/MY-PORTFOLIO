import logo from './logo.svg';
import './App.css';
import About from './about';
import Aos from 'aos'
import 'aos/dist/aos.css';
import moon from './icon-moon.svg';
import sun from './icon-sun.svg';
import { useEffect,useState} from 'react'
import css from './frada.png'

import Typical from 'react-typical'
import press from './press.jpeg'
import mobile from './mobile-ui-design.png'
import blog from './blog1.jpg'
import seo from './seo.jpeg'
import {SiFacebook} from 'react-icons/si'
import {RiWhatsappLine} from 'react-icons/ri'
import {SiTwitter} from 'react-icons/si'
import {ImLinkedin2} from 'react-icons/im'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import Menuheader from './Menuheader';
import quote from "./quotes.svg"
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project1.png"
import project4 from "./project4.png"
import project5 from "./project5.png"
import project6 from "./project6.png"
import project7 from "./project7.png"
import project8 from "./project8.png"
import project9 from "./project9.png"
import project10 from "./project10.png"
import fixcer from './fixcer.png'
import {BsLink45Deg} from "react-icons/bs"



function App() {
  const Progress = ({done,title}) =>{
    return (
      <div className='progress'>
        <div className="progress-done" 
        style={{opacity:1, width: `${done}%` }}>
          <span style={{color:'black',marginLeft:'20px',fontWeight:'500',padding:'3px',color:'white'}}>{title}</span>
         

        </div>
      </div>
    )
  }
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
  <>
  <Menuheader/><br/><br/>
 
  <section className="home">
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
        <span ><TbBrandTelegram/></span>&nbsp; &nbsp;
        <span><SiFacebook/></span>&nbsp; &nbsp;
        <span><RiWhatsappLine/></span>&nbsp; &nbsp;
        <span><ImLinkedin2/></span>&nbsp; &nbsp;
        <span><SiTwitter/></span>&nbsp; &nbsp;
      </div>
      <p style={{fontSize:'17px', fontWeight:'500'}}>Creativity & innovations keeps me moving. Your favourite web developer</p>
      <button className='primary-btn btn'>Contact Us</button>
     </div>
    </div>
    
   </section>
   <section className="branding">
<div className='container grid'>
  <div className='box flex' data-aos="fade-up">
   <div className='text'><h1>01</h1></div>
   <div className='para'>
    <h2>WEB DESIGN</h2>
    <p>Giving quality and awesome website designs that suit your business and ideas</p>
   </div>
  </div>
  <div className='box flex' data-aos="fade-up">
   <div className='text'><h1>02</h1></div>
   <div className='para'>
    <h2>SEO</h2>
    <p>Without traffic no business can stand,with my knowledge of marketing I can use organic method(SEO) to drive traffic with quality backlinks</p>
   </div>
  </div>
  <div className='box flex' data-aos="fade-up">
   <div className='text'><h1>03</h1></div>
   <div className='para'>
    <h2>WEB DEV</h2>
    <p>Creating interactive and responsive web apps that uses heavy technologies and database</p>
   </div>
  </div>
  <div className='box flex'data-aos="fade-up">
   <div className='text'><h1>04</h1></div>
   <div className='para'>
    <h2>MARKETING</h2>
    <p>Marketing can't be excluded from a business to drive. I provide different marketing tools like facebook, instagram and social media means to grow and create businesses awareness</p>
   </div>
  </div>
  
</div>
   </section>

   <section className="about topMargin" id="about">
    <div className='container flex'>
      <div className="left mtop" data-aos="slide-right">
        <div class="heading">
          <h3>About Me</h3>
          <h1>Who I am and What I do</h1>
        </div>
        <p>My name is Ekweaga Charles, an IT personnel and a front-end developer, aspiring full stack developer</p>
          <p> My passion for tailored solutions to problems in a thriving,exciting and growing space. In the tech industry, my niche narrows
            down to web development and digital marketing. I have a total experience of two years plus in the industry building and deploying projects for clients and businesses
            . In the web development, I have knowledge of HTML, CSS, JAVASCRIPT and Its frameworks with a little of backend technologies. 
            I also uses CMS(WordPress) to build websites for clients and businesses. In the marketing space, SEO and social media marketing are my 
            specializations. Has a good experience in developing mobile responsive web apps
          </p>
          <p> Comes with Bachelor's degree in Information Technology where I was exposed to programming, concepts of Information technology
            ,software development. I also acquire knowledge in software methodologies, cloud computing and hardware and embedded systems
          </p>
             <button className="primary-btn" style={{padding:'8px', marginBottom:'20px'}}><a href="/Resume_CV.pdf" style={{color:'white',textDecoration:'none'}} download="Resume/CV">Download CV</a></button>
      </div>
      <div className="right">
        <div className="img">
          <img src={css}/>
        </div>
      </div>
    </div>
   </section>

  
   <div id="services" class="cards-1 bg-gray services topMargin">
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <h2>Explore My Services</h2>
          </div> 
      </div>
      <div class="row">
          <div class="col-lg-12">
              
            <div className="row">
            <div class="card col-lg-4">
                  <div class="card-icon">
                      <span class="fas fa-headphones-alt">1</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">WordPress Design</h5>
                      <p>Giving quality and awesome website designs that suit your business and ideas</p>
                    
                  </div>
              </div>
              <div class="card col-lg-4">
                  <div class="card-icon red">
                      <span class="far fa-clipboard">2</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">SEO Services</h5>
                      <p>Without traffic no business can stand,with my knowledge of marketing I can use organic method(SEO) to drive traffic with quality backlinks</p>
                    
                  </div>
              </div>


              <div class="card col-lg-4">
                  <div class="card-icon red">
                      <span class="far fa-clipboard">3</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Web Development</h5>
                      <p>Giving quality and awesome website designs that suit your business and ideas</p>
                     
                  </div>
              </div>

              <div class="card col-lg-4">
                  <div class="card-icon red">
                      <span class="far fa-clipboard">4</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Start Ups</h5>
                      <p>Open to collaborate with your team members to build start up products and services</p>
                     
                  </div>
              </div>


              <div class="card col-lg-4">
                  <div class="card-icon red">
                      <span class="far fa-clipboard">5</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">E-commerce/FinTech</h5>
                      <p>Provide and give your e-commerce website beautiful designs. Open to work on FinTech projects</p>
                    
                  </div>
              </div>

                <div class="card col-lg-4">
                  <div class="card-icon green">
                      <span class="far fa-comments">6</span>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Front-End Dev</h5>
                      <p>Implement and build front-end designs of products. I work alongside with UI/UX designers to build front-end products</p>
                   
                  </div>
              </div>

            </div>
             
          
            
              
              
               
            
            
              
          </div>
      </div>
  </div>
</div> 


   <section className="skill" id="skills">
    <div className="container">
      <div className="heading"><h3>WHY CHOOSE US</h3>
      <h1>SOME OF MY SKILLS</h1>
      </div>
      <div className="content flex">
        <div className="left topMargin">       
        <div class="row">
            <div class="col-lg-12 ">
                <div class="progress " style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'80%'}} arial-valuenow="25" arial-valuemin="0">HTML</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'70%'}} arial-valuenow="25" arial-valuemin="0">CSS/BOOTSTRAP/SASS/TAILWIND</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'70%'}} arial-valuenow="25" arial-valuemin="0">JAVASCRIPT</div>
                </div>
            </div><br/>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'50%'}} arial-valuenow="25" arial-valuemin="0">REACTJS</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1" >
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'30%'}} arial-valuenow="25" arial-valuemin="0">VUEJS</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1" >
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'60%',padding:'4px'}} arial-valuenow="25" arial-valuemin="0">NPM/GIT/GITHUB</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1" >
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'50%'}} arial-valuenow="25" arial-valuemin="0">REDUX/VUEX</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1" >
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'65%'}}arial-valuenow="25" arial-valuemin="0">SEO</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'65%'}} arial-valuenow="25" arial-valuemin="0">FIREBASE</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'50%'}} arial-valuenow="25" arial-valuemin="0">WORDPRESS</div>
                </div>
            </div>
             <div class="col-lg-12 mb-1">
                <div class="progress" style={{height:'20px'}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width:'80%'}} arial-valuenow="25" arial-valuemin="0">WEB DEVELOPMENT</div>
                </div>
            </div>
        </div>
        </div>
        <div className="right mtop" data-aos="slide-left">
          <h1 style={{fontWeight:'600'}}>Solve A Problem</h1>
          <p>In tech industry, problem solving should be the driving force for anyone going into it</p>
          <p>Over the years of experience I have gathered, I see problem as a challenge and i do well to overcome the challenge</p>
            <button style={{padding:'8px', marginBottom:'20px'}}>Hire Me</button>
        </div>
      </div>
    </div>
   </section>


   <div className=" portfolio" id="projects">
    <div className="row mb-4">
      <h1 className="col-lg-12 text-center">Few projects</h1>
    </div>
    <div className="projects ">
      <div className="project  shadow  d-flex flex-column gap-2 " data-aos="fade-in">
        <img src={project1}/>
        <div>
          <h2>NFT MARKET PLACE</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link  <BsLink45Deg/></a></p>
        </div>
      </div>
      <div className="project  shadow ">
        <img src={project2}/>
         <div>
          <h2>O'invoice</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/> </a></p>
        </div>
      </div>
      <div className="project shadow ">
        <img src={project5}/>
        <div>
          <h2>Diko</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/></a></p>
        </div>
      </div>
      <div className="project   ">
        <img src={project10}/> <div>
        <h2>Landing Page</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/></a></p>
        </div>
      </div>
    </div>


   
    <div className="projects mt-4 ">
      <div className="project  shadow  d-flex flex-column gap-2 ">
        <img src={project9}/>
        <div>
          <h2>File storage</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link  <BsLink45Deg/></a></p>
        </div>
      </div>
      <div className="project  shadow ">
        <img src={project6}/>
         <div>
          <h2>Pixabulous</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/> </a></p>
        </div>
      </div>
      <div className="project shadow ">
        <img src={project8}/>
        <div>
          <h2>Spotify Clone</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/></a></p>
        </div>
      </div>
      <div className="project   ">
        <img src={fixcer}/> <div>
        <h2>WordPress website</h2>
        </div>
        <div className="overlay">
          <p><a href="#" >Link <BsLink45Deg/></a></p>
        </div>
      </div>
    </div>


   </div>

   <div className=" more container" data-aos="slide-up">
    <div className="">
      <section>
        <p><a href="https://github.com/Ekweaga" style={{textDecoration:'none'}}>View more projects on my github profile</a></p>
      </section>
    </div>
   </div>





   <div class="basic-3">
  <div class="">
      <div class="row">
          <div class="col-lg-12">
              <div class="text-container">
                  <h2>Hire Me</h2>
                  <p class="p-large">Creativity & innovations keeps me moving. Your favourite web developer</p>
                  <a class="btn-solid-lg" href="https://github.com/Ekweaga" style={{borderRadius:'20px'}}>More on Github</a>
              </div> 
          </div> 
      </div>
  </div> 
</div> 
   <section className='me'>
    <div >
      <h1 style={{textAlign:'center'}} data-aos="flip-left">20+</h1>
      <p>PROJECTS DELIVERED</p>
    </div>
    <div> <h1 style={{textAlign:'center'}} data-aos="flip-left">2+</h1>
      <p>CERTIFICATES</p></div>
    <div> <h1 style={{textAlign:'center'}} data-aos="flip-left">2+</h1>
      <p>YEARS OF EXPERIERNCE</p></div>
    <div> <h1 style={{textAlign:'center'}} data-aos="flip-left">9800+</h1>
      <p>LINES OF CODE</p></div>
   </section>

   <div class="cards-2 bg-gray">
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <h2 class="h2-heading">Customer testimonials</h2>
          </div> 
      </div>
      <div class="row">
          <div class="col-lg-12">
              <div className="row">
              <div class="card col-lg-4" >
                  <img class="quotes" src={quote} alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Very good, It was nice working with you. Patient and listen to key details</p>
                      <div class="testimonial-author">OluwaDaremi</div>
                      <div class="occupation">Customer</div>
                  </div>
                  <div class="gradient-floor red-to-blue"></div>
              </div>
            
              <div class="card col-lg-4" >
                  <img class="quotes" src={quote} alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Hire him. He is very good at his works. Bravo Man</p>
                      <div class="testimonial-author">Pixabulous Designs</div>
                      <div class="occupation">Web Agency</div>
                  </div>
                  <div class="gradient-floor blue-to-purple"></div>
              </div>
              <div class="card col-lg-4" >
                  <img class="quotes" src={quote} alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Good WordPress themes and Designs. Bravo and keep it up</p>
                      <div class="testimonial-author">Fredacom</div>
                      <div class="occupation">Start Up</div>
                  </div>
                  <div class="gradient-floor red-to-blue"></div>
              </div>
            
              </div>
              
              
           
            
              
            
            
              

              
             
            
          </div> 
      </div>
  </div> 
</div> 

   <div id="contact" class="form-1">
  <div class="container">
      <div class="row">
          <div class="col-lg-6">
              <div class="text-container">
                  <div class="section-title">Get Your Project Done</div>
                  <h2>Contact Me</h2>
                  <p>Write to me your project ideas in full details and get it done within stipulated time limit.
                   <span style={{fontWeight:'bold'}}> Your satisfaction is my happiness, your favourite web developer</span>
                  </p>
                
              </div> 
          </div> 
          <div class="col-lg-6" data-aos="slide-left">
             
              <form>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="Name" required />
                  </div><br/>
                  <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email" required />
                  </div><br/>
                  <div class="form-group" style={{width:'100%'}}>
                      <input type="text" class="form-control" placeholder="Industry" required />
                  </div><br/>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="Your product" required />
                  </div><br/>
                  <div class="form-group">
                      <button type="submit" class="form-control-submit-button" style={{borderRadius:'15px',width:'200px',padding:'5px'}}>Submit</button>
                  </div>
              </form>
            
          </div> 
      </div>
  </div> 
</div>







   
   <footer>
  <div className="container grid footer">
    <div className="box">
      <h5>Chax</h5>
      <p>Leverages the latest technologies like web development, UI/Ux design, Blockchain, and App Development for clients to get the best outcome for their budget. 
             If you are searching for a globally trusted solution partner. We are here!</p>
      <div className='socialIcon'>
      <span><TbBrandTelegram/></span>&nbsp; &nbsp;
        <span><SiFacebook/></span>&nbsp; &nbsp;
        <span><RiWhatsappLine/></span>&nbsp; &nbsp;
        <span><ImLinkedin2/></span>&nbsp; &nbsp;
        <span><SiTwitter/></span>&nbsp; &nbsp;
      </div>

    </div>
    <div className="box">
      <h2>Quick Links</h2>
      <ul>
        <li>
          Home
        </li>
        <li>
         <a href="#about" style={{color:'white', textDecoration:'none'}}> About</a>
        </li>
        <li>
         <a href="#skills" style={{color:'white', textDecoration:'none'}}>Skills</a> 
        </li>
        <li>
         <a href="#contact" style={{color:'white', textDecoration:'none'}}>Contact</a> 
        </li>
        <li>
          <a href="#services" style={{color:'white', textDecoration:'none'}}>Services</a>
        </li>
      </ul>
    </div>
    <div className='box'>
      <h2>Get in Touch</h2>
      <p>For your businesses and project ideas, you can reach out to me or contact me</p>
   <div className="icon">
   <span><GoLocation/></span>&nbsp;
       <label htmFor="">Location: Akure Ondo, Ondo State</label>
   </div>
   <div className="icon">
   <span><BsTelephone/></span>&nbsp;
       <label htmFor="">Phone: +234 81488 37221</label>
   </div>
   <div className="icon">
   <span><AiOutlineMail/></span>&nbsp;
       <label htmFor="">Email:hikay123@gmail.com</label>
   </div>
    </div>
    <div className='box'>
      <h2>Solve a Problem</h2>
      <p>In tech industry, problem solving should be the driving force for anyone going into it

Over the years of experience I have gathered, I see problem as a challenge and i do well to overcome the challenge</p>
  
  
  
    </div>
    
  </div>
  
  <div className='legal container'>
    <p>Copyright @2022. All rights reserved</p>
    <label htmlFor=''>Design & Deeloped by <span>Chax-Tech</span></label>
  </div>
</footer>
   </> 
  );
}

export default App;
