import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "components/Layout/Layout";
import Description from "./Description";
import { ProjectsAry } from "constants/Projects";

type PageProps = NextPage & { Layout: any };

const Modal = dynamic(import("./Modal/Modal"), { ssr: false });
const PageComponent: PageProps = () => {
  const [stateModalType, setStateModalType] = useState<Projects.ModalType | "">(
    ""
  );

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStateModalType("");
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-6xl text-title-shadow py-6 mb-6">SideProject</h1>
        <div className="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-12">
          {ProjectsAry.map(({ imgName, ...description }) => {
            const projectName = imgName.split(".")[0] as Projects.ModalType;
            const handleModalType = () => setStateModalType(projectName);

            return (
              <div key={projectName} className="group relative">
                <img src={`/projects/${imgName}`} alt={projectName} />
                <div className="absolute left-0 top-0 w-full h-full bg-black/50 scale-0 group-hover:scale-100 group-hover:transition-all group-hover:ease-linear group-hover:duration-300">
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
      <div className="text-end py-12">
        <Link
          href="/skills"
          className="p-3 rounded-full text-2xl text-white bg-violet-700 hover:bg-teal-300 hover:transition-all hover:ease-in-out hover:duration-300"
        >
          Next Page
        </Link>
      </div>
      {stateModalType && (
        <Modal type={stateModalType} handleClose={handleClose} />
      )}
    </>
  );
};

PageComponent.Layout = Layout;

export default PageComponent;
