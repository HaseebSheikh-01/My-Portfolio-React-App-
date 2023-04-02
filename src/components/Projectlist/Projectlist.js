import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import bootstrap_portfolio from '../../Assets/bootstrap_portfolio.PNG'
import phonedirectoryimage from '../../Assets/interface.PNG'
import jdbcdiagram from '../../Assets/jdbc-diagram.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Projectlist() {
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
    <div className="projectbackground">
      <Container fluid className="project-section">
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
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bootstrap_portfolio}
                isBlog={false}
                title="Bootstrap PortFolio"
                description="My portfolio showcases my web development skills using Bootstrap, HTML, JavaScript, EmailJS, and CSS. It's a modern and responsive website with interactive elements, professional styling, and a user-friendly design. Visitors can easily contact me through EmailJS."
                ghLink="https://haseebsheikh.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={phonedirectoryimage}
                isBlog={false}
                title="Phone Directory"
                description="The project could use a data structure like an array or a linked list to represent the phonebook, with each entry containing fields for the contact's name, phone number and any other relevant information."
                ghLink="https://github.com/HaseebSheikh-01/Phone-directory-Data-Structure-"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jdbcdiagram}
                isBlog={false}
                title="JAVA DATABASE CONNECTIVITY"
                description="This project is a Java-based application that utilizes JDBC to connect with a Microsoft Access database, allowing users to store and manage data through an intuitive graphical interface. This application is suitable for personal and small business data management."
                ghLink="https://zappysys.com/api/integration-hub/jdbc-connector/access?gclid=CjwKCAjw_YShBhAiEiwAMomsELaqr4b07RFvYtrAn3gm2bQK_9YaP-DBXv0jIjEtNUjRAQ_VxXoPUxoC0VkQAvD_BwE"
              />
            </Col>

            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*    imgPath={gridlinesbuilders}*/}
            {/*    isBlog={false}*/}
            {/*    title="Grid Line Builders"*/}
            {/*    description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."*/}
            {/*    ghLink="https://gridlinesbuilders.in/"*/}
            {/*  />*/}
            {/*</Col>*/}

            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*    imgPath={charlespizza}*/}
            {/*    isBlog={false}*/}
            {/*    title="Charlestown Pizza"*/}
            {/*    description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."*/}
            {/*    ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"*/}
            {/*  />*/}
            {/*</Col>*/}

            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*    imgPath={todolist}*/}
            {/*    isBlog={false}*/}
            {/*    title="To Do List"*/}
            {/*    description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."*/}
            {/*    ghLink="https://todolist-rahul81.netlify.app/"*/}

            {/*  />*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist