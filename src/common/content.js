import "./content.css";
import image from "../assets/Someday, Alena Aenami.jpeg";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  //   const background = require("../assets/IMG_3942.jpeg");
  return (
    <>
<div className="resume">
      <div className="header">
        <dvi className="title">
          <h1>Charlie Tai</h1>
          <p className="little-name">Fronted Developer</p>
        </dvi>
      </div>
      <div className="content">
        <div className="content-box">
          <h2>Summary</h2>
          <p>介紹</p>
          <p>
            目前擔任前端工程師將近一年多，原先自學是以React為主要框架，後因應公司需求，重新學習了angular，因此熟悉強型別語言的TypeScript，任職期間，熟悉了Git的使用、與後端API的串接、並與其他前端夥伴共同開發。
          </p>
        </div>
        <div className="content-box">
          <h2>Skills</h2>
          <p className="chinese">技能</p>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
          </ul>
        </div>


        <div className="content-box">
          <h2>Experience</h2>
          <p>經驗</p>
          <div className="job">
            <h3>Fronted Developer, ABC Company</h3>
            <h4>Oct. 2020 - Present</h4>
            <ul>
              <li>Develop and maintain websites and web applications using React and Node.js</li>
              <li>Collaborate with designers and stakeholders to create user-friendly interfaces</li>
              <li>Implement responsive design and accessibility best practices</li>
              <li>Write clean, efficient, and well-documented code</li>
              <li>Participate in code reviews and contribute to team knowledge sharing</li>
            </ul>
          </div>
        </div>

        <div className="content-box">
          <div className="job">
            <h3>Web Developer, XYZ Company</h3>
            <h4>June 2015 - December 2017</h4>
            <ul>
              <li>Developed and maintained websites and web applications using Angular and Node.js</li>
              <li>Collaborated with designers and stakeholders to create user-friendly interfaces</li>
              <li>Implemented responsive design and accessibility best practices</li>
              <li>Wrote clean, efficient, and well-documented code</li>
              <li>Participated in code reviews and contributed to team knowledge sharing</li>
            </ul>
          </div>
        </div>

        <div className="content-box">
          <h2>Education</h2>
          <p>教育程度</p>
          <div className="education">
            <h3>Bachelor of Science in Computer Science, University of XYZ</h3>
            <h4>September 2011 - June 2015</h4>
          </div>
        </div>
      </div>
    </div>
  );
    </>
  );
}
