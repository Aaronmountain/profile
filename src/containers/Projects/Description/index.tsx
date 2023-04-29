import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Description.styles";

type Props = {
  description: {
    title: string;
    skills: string;
    githubUrl: string;
  };
  handleModalType: () => void;
};

const Description = ({ description, handleModalType }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleModalType();
  };

  return (
    <div className="desc">
      <h2>{description.title}</h2>
      <p className="desc__skills">{description.skills}</p>
      <button
        type="button"
        onClick={handleClick}
        className="desc__viewmore ReactPokemonList"
      >
        View More
      </button>
      <Link
        href={description.githubUrl}
        className="github-link swipe-zoom-up"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/common/github.svg" alt="GitHub" width="50" height="50" />
      </Link>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Description;
