import React from "react";
import Link from "next/link";
import styles from "./Skills.styles";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="title">Skills</h1>
      <div className="skills__container">
        <div className="skills__container__item">
          <h2>Front-end</h2>
          <ul>
            <li>HTML、CSS、RWD</li>
            <li>BootStrap</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Router</li>
            <li>Style-Component</li>
            <li>Nextjs</li>
            <li>style jsx</li>
            <li>Unit test</li>
          </ul>
        </div>

        <div className="skills__container__item">
          <h2>Tools</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>notpad++</li>
            <li>Codepen</li>
            <li>Git and GitHub</li>
            <li>Webpack</li>
          </ul>
        </div>

        <div className="skills__container__item">
          <h2>Strengths</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Communicative</li>
            <li>Self-demand</li>
            <li>Team Work</li>
            <li>High EQ</li>
            <li>Optimist</li>
          </ul>
        </div>

        <div className="skills__container__item">
          <h2>Language</h2>
          <ul>
            <li>
              English
              <br />
              TOEIC 620
              <br />
              (2020/06/20)
            </li>
          </ul>
        </div>
      </div>
      <div className="next-page">
        <Link href="/profile">
          <button type="button">Next Page</button>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Skills;
