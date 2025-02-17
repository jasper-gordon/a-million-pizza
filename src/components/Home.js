import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import street_pic from '../assets/street_pizza_photo.png';
import dough from '../assets/dough.png';
import oven from '../assets/oven.png';
import finsihed_pizza from '../assets/finished.png';
import {Link} from "react-router-dom";
import down_arrow from '../assets/down_arrow.png';
// import oven_vid from '../assets/Oven_Compressed.mp4';
import home_page_vid from '../assets/home-page-vid.mov';


export const Home = () => {
    const ref = useRef();
  return(
      <>
   <div>
     
      <Parallax pages={6.5} ref={ref}> 
    
        <ParallaxLayer 
        speed={0}
        offset={0}>
        
      
        <video className='videoHome' autoPlay loop muted playsInline>
          <source src={home_page_vid} type="video/mp4" />
         
        </video>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={0}>
        <div className='home-title-box'>
        <h1 className='home-title'> Welcome to <br/> A Million Pizza</h1>
        </div>
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={1}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${dough})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={.9}>
        <div className='home-div1'>
        <h1 className='home-subheader'> Our Mission</h1>
        <p className='home-paragraph'> To explore all things pizza, to learn and develop our understanding, and to share it with you! </p>
        </div>
        </ParallaxLayer>
       
       
        <ParallaxLayer 
        speed={0}
        offset={2}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${oven})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>
       

        <ParallaxLayer 
        speed={1}
        offset={1.5}>
        <div className='home-div1'>
        <h1 className='home-subheader'> The Challenge</h1>
        <p className='home-paragraph'> Make 1,000,000 pizzas. <br/> <br/> It might take a while (we only have ☝️ oven for god's sake!), so for now, our goal is to convince all you pepperonis to watch us make pizzas on YouTube a million times. Deal? Still curious? Keep scrolling to learn more or click that big red button 👇
        </p>
        </div>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={2.5}>
        <a style={{textDecoration:'none'}} href='https://www.youtube.com/channel/UC55OAzN0TXMQsMAfGi_jYVQ'>
        <h1 className='red-button'> Pizza Videos</h1>
        </a>

         {/* <video autoPlay loop muted>
          <source src={oven_vid} type="video/mp4" />
        </video> */}
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={3}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${finsihed_pizza})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={1}
        offset={3.3}>
        <div className='home-div1'>
        <h1 className='home-subheader'> The Guides</h1>
        <p className='home-paragraph'> As lifelong pizza makers, we have made <em>plenty</em> of mistakes (Ever had yeast-less pizza? We wouldn't recommend it), which is why we're developing a set of guides and resources to help you wherever you are on your pizza journey!
        </p>
        </div>

        <Link to='/tips' style={{textDecoration:'none'}}>
        <h1 className='home-tips-box'> Pizza Tips!</h1>
        </Link>
        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={4}
        className={'homeImage'}
        style={{
            backgroundImage: `url(${street_pic})`,
            backgroundSize: 'cover',
        }}>
        </ParallaxLayer>


        <ParallaxLayer 
        speed={0}
        offset={4.5}>
        
        <h1 style={{fontSize: "40px"}} className='home-subheader'> Still curious?</h1>

        </ParallaxLayer>

        <ParallaxLayer 
        speed={0}
        offset={4.95}
        >
        <img src={down_arrow} alt="Down arrow" className="down-arrow"></img>
        </ParallaxLayer> 

         <ParallaxLayer 
        speed={0}
        offset={5}
        factor={1.5}
        style={{
            backgroundColor: '#C75146',
        }}
        >
          <div>
          <h1 className='home-title'>
            About Us
          </h1>
          <p className='home-about'>
          A Million Pizza Challenge started in November 2021 when Jasper, a lifelong dough boy and cheese pizza enthusiast, lamented to his friend Cooper, the smart and handsome one, that he was looking for a new challenge to push him to elevate his pizza, and joked that "it would be kinda fun to make a pizza every day, like do the whole 10,000 hours thing." Cooper didn't think that was funny, and told him it was a terrible idea. After going home for the holidays, Jasper came back with an even worse idea: Make a million pizzas and film the whole thing. After Cooper ran the numbers on this (It would take about 2,000 years to make a million pizzas one at a time non-stop) he suggested counting each view on the Youtube videos as a pizza instead. Not yet ready to give his life to the holy pie, Jasper agreed and set off on his mission to make better pizza, to make more pizza, and most of all to have fun doing it with his friends.
          </p>
          </div>
        
        </ParallaxLayer>
      
         
          </Parallax> 
 </div>

   </>
  )
}