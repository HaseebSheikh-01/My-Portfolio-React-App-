import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import animated from './aboutanimation.json'
import Lottie from 'lottie-react'

function Aboutpage() {
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
        <div className='aboutpagebackground'>
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
                        value: "#91eae4",
                    },
                    links: {
                        color: "#000000",
                        distance: 80,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
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
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>As a computer science student, I am passionate about technology and its ability to transform the world. My interest in programming and problem-solving began at a young age, and I have been honing my skills ever since. I am a motivated and dedicated learner, always seeking to improve my understanding of complex concepts and cutting-edge technologies.

                            During my time as a computer science student, I have gained expertise in a range of programming languages, including Java and C++. I have also developed skills in software development, database management, and web development. In addition to my technical skills, I am an effective communicator and work well in team environments.

                            As a lifelong learner, I am committed to staying up-to-date with the latest trends and advancements in the field of computer science.

                            With a strong foundation in computer science, I am excited to embark on a career that allows me to innovate, create, and make a positive impact on the world.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Next Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
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

export default Aboutpage