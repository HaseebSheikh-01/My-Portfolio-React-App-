import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import animated from './animated.json'
import Lottie from 'lottie-react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    
    <div className='homepagebackground'>
      
      <Container>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 80,
                        enable: true,
                        opacity: 0.5,
                        width: 4,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>🌎 </span></h2>
            <h2 className='nametext'>I'm Haseeb Sheikh</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/HaseebSheikh-01");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/haseeb-sheikh-a26a55267/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/haseebsheikh_01");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/haseeb_sheikh_1?igshid=YmMyMTA2M2Y=");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=100005049075719");
            }}
                    className='socailmediabtn'><AiFillFacebook className='icon' /></button>
          </Col>

          <Col md={5}>
<div>
              <Lottie animationData={animated}/>
</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home