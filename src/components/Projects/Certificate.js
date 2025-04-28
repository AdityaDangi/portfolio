import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Certificate4.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Certificate1.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Certificate2.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Worksjsdjsjj </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="R Programming"
              description="Developed a dynamic Sudoku solver using JavaScript, implementing a backtracking algorithm with visual feedback, real-time validation, and puzzle fetching from a backend API."
              ghLink="https://github.comy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data Analysis with Tableau"
              description="Completed a certificate course in Data Analysis with Tableau, gaining practical expertise in data visualization, dashboard creation, and interactive reporting. Developed strong foundational skills in using Tableau tools to analyze, interpret, and present data insights effectively."
              ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Logic Building, Programming and Data Structures: Learn How to Think, & Program"
              description="Completed a certificate course in Logic Building, Programming, and Data Structures, gaining practical knowledge in algorithmic thinking, problem-solving, and core programming concepts. Developed strong foundational skills in constructing efficient programs and understanding key data structures."
              ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Excel Skills for Business"
              description="Completed a certificate course in Excel Skills for Business, gaining practical expertise in data organization, analysis, and visualization. Developed strong foundational skills in applying Excel functions, formulas, and tools to solve real-world business problems."
              ghLink="https://github.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
