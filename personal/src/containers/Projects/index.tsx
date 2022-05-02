import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Description from "./Description";
import { ProjectsAry } from "constants/Projects";
import styles from "./Projects.styles";

const Modal = dynamic(import("./Modal/Modal"), { ssr: false });

const Projects = () => {
  const [stateModalType, setStateModalType] = useState<Projects.ModalType | "">(
    ""
  );

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStateModalType("");
  };

  return (
    <div>
      <div className="project">
        <h1 className="title">SideProject</h1>
        <div className="project__content">
          {ProjectsAry.map(({ imgName, ...description }) => {
            const projectName = imgName.split(".")[0] as Projects.ModalType;
            const handleModalType = () => setStateModalType(projectName);

            return (
              <div key={projectName} className="project__content__item">
                <img src={`/projects/${imgName}`} alt={projectName} />
                <div className="backdrop">
                  <Description
                    description={description}
                    handleModalType={handleModalType}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="next-page">
        <Link href="/skills">
          <button type="button">Next Page</button>
        </Link>
      </div>
      {stateModalType && (
        <Modal type={stateModalType} handleClose={handleClose} />
      )}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Projects;
