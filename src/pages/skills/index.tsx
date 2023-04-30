import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";

type PageProps = NextPage & { Layout: any };

const getClasses = () => ({
  cardClasses:
    "w-[250px] flex-1 bg-slate-500 text-center border-2 border-solid border-[rgb(223,250,252)] shadow-[0_0_5px_3px_rgba(0,0,0,0.3)] hover:text-white hover:translate-y-[-10px] hover:transition-all hover:ease-in-out hover:duration-700",
  cardTitleClasses: "text-3xl py-6",
  cardSkillContainer: "w-[80%] mx-auto",
  cardSkillItem: "border-solid border-b pb-2 mb-4",
});

const PageComponent: PageProps = () => {
  const { cardClasses, cardTitleClasses, cardSkillContainer, cardSkillItem } =
    getClasses();

  return (
    <>
      <h1 className="text-6xl text-title-shadow py-6 mb-6">Skills</h1>
      <div className="h-full flex justify-center gap-6">
        <div className={cardClasses}>
          <h2 className={cardTitleClasses}>Front-end</h2>
          <ul className={cardSkillContainer}>
            <li className={cardSkillItem}>HTML5、CSS3、RWD</li>
            <li className={cardSkillItem}>SCSS、BootStrap、TailwindCss</li>
            <li className={cardSkillItem}>JavaScript、Typescript</li>
            <li className={cardSkillItem}>
              React(React Hook, Functional component)
            </li>
            <li className={cardSkillItem}>Redux、React-Router、NextJs</li>
            <li className={cardSkillItem}>Style-Component</li>
            <li className={cardSkillItem}>Vue、Vuex、Vue-Router</li>
            <li className={cardSkillItem}>Element-UI、Material-Ui</li>
          </ul>
        </div>

        <div className={cardClasses}>
          <h2 className={cardTitleClasses}>Others</h2>
          <ul className={cardSkillContainer}>
            <li className={cardSkillItem}>Docker/Docker-compose</li>
            <li className={cardSkillItem}>Visual Studio Code</li>
            <li className={cardSkillItem}>Terminal、Linux 環境</li>
            <li className={cardSkillItem}>Shell-Script</li>
            <li className={cardSkillItem}>
              非同步處理、HTTP資料傳輸協議、WebSocket
            </li>
            <li className={cardSkillItem}>Git and Git-Flow、GitLab、GitHub</li>
            <li className={cardSkillItem}>Unit test(Jest)</li>
          </ul>
        </div>

        <div className={cardClasses}>
          <h2 className={cardTitleClasses}>Strengths</h2>
          <ul className={cardSkillContainer}>
            <li className={cardSkillItem}>Problem Solving</li>
            <li className={cardSkillItem}>Communicative</li>
            <li className={cardSkillItem}>Self-demand</li>
            <li className={cardSkillItem}>Team Work</li>
            <li className={cardSkillItem}>High EQ</li>
            <li className={cardSkillItem}>Optimist</li>
          </ul>
        </div>

        <div className={cardClasses}>
          <h2 className={cardTitleClasses}>Language</h2>
          <ul className={cardSkillContainer}>
            <li className={cardSkillItem}>
              English
              <br />
              TOEIC 620
              <br />
              (2020/06/20)
            </li>
          </ul>
        </div>
      </div>
      <div className="text-end py-12">
        <Link
          href="/profile"
          className="p-3 rounded-full text-2xl text-white bg-violet-700 hover:bg-teal-300 hover:transition-all hover:ease-in-out hover:duration-300"
        >
          Next Page
        </Link>
      </div>
    </>
  );
};

PageComponent.Layout = Layout;

export default PageComponent;
