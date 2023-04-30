import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  if (!description) return null;

  return (
    <div className="h-full p-3 flex flex-col items-center justify-center text-center text-white gap-y-5">
      <h2 className="hover:text-teal-300 hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300">
        {description.title}
      </h2>
      <p className="hover:text-teal-300 hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300">
        {description.skills}
      </p>
      <div className="flex-1 flex flex-col items-center justify-end gap-y-3">
        <button
          type="button"
          onClick={handleClick}
          className="hover:text-teal-300 hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300"
        >
          View More
        </button>
        <Link
          href={description.githubUrl}
          className="hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/common/github.svg" alt="GitHub" width="50" height="50" />
        </Link>
      </div>
    </div>
  );
};

export default Description;
