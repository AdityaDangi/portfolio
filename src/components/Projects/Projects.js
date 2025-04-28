import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/chatify.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Product Ratings and Sales Performance Dashboard | Data Visualization"
              description="Designed and developed a Product Ratings and Sales Performance Dashboard to visualize key business metrics effectively. Applied data visualization techniques to present product ratings, sales trends, and performance insights through interactive and user-friendly dashboards, enhancing decision-making processes."
              ghLink="https://github.comy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shortest Path Finder"
              description="Implemented a shortest path finder using Dijkstra's Algorithm, applicable to GPS navigation for route optimization and network analysis for identifying efficient data transmission paths."
              ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sales Performance Dashboard | Business Analytics Visualization"
              description="Created a Sales Performance Dashboard to analyze and visualize critical business data, focusing on sales trends, revenue metrics, and product performance. Leveraged business analytics and visualization techniques to deliver interactive, insightful dashboards that support strategic decision-making."
              ghLink="https://github.com"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;