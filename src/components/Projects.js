import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.PNG";
import projImg2 from "../assets/img/project-img2.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Modern React with Redux",
      description: "Beginner React Course",
      imgUrl: projImg1,
    },
    {
      title: "A complete Web Application Bootcamp",
      description: " Advanced React & Redux Concepts",
      imgUrl: projImg2,
    },
    
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cognizant</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Verizon</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I Joined as <strong>Software Engineer-II</strong> in Verizon in Nov2022. I was assigned to verizon's 'VMEX India Tracking' project.It is purely based on
                      react technology. Im now currently working on the same.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I Joined as <strong>Programmer Analyst Trainee</strong> in cognizant in June2019. I have worked under the insurance Domain for DLG Client.
                      Then i Got promoted to Associate on June2022. I have worked under JAVA Technology. During Mar2021 Our client has planned to migrate some of the applications to
                      React Technology. I learnt React on my own in order to be a part of migration team. I have also worked on small modules during migration. Getting to
                      know about the demands in react technology, i planned to switch myself to React. I did Two certifications on React. I left Cognizant on Nov2022.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
