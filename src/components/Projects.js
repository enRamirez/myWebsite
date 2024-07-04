import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            // img: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            // img: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            // img: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            // img: projImg4,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            // img: projImg5,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>text holder</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
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
                            <Tab.Pane eventKey="second">text holder</Tab.Pane>
                            <Tab.Pane eventKey="third">text holder</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="" src={colorSharp2}></img>
        </section>
    )
}