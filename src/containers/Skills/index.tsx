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
            <li>HTML5、CSS3、RWD</li>
            <li>SCSS、BootStrap、TailwindCss</li>
            <li>JavaScript、Typescript</li>
            <li>React(React Hook, Functional component)</li>
            <li>Redux、React-Router、NextJs</li>
            <li>Style-Component</li>
            <li>Vue、Vuex、Vue-Router</li>
            <li>Element-UI、Material-Ui</li>
          </ul>
        </div>

        <div className="skills__container__item">
          <h2>Others</h2>
          <ul>
            <li>Docker/Docker-compose</li>
            <li>Visual Studio Code</li>
            <li>Terminal、Linux 環境</li>
            <li>Shell-Script</li>
            <li>非同步處理、HTTP資料傳輸協議、WebSocket</li>
            <li>Git and Git-Flow、GitLab、GitHub</li>
            <li>Unit test(Jest)</li>
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
