import React from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import ModalCarousel from "./ModalData/ModalCarousel.json";
import ModalContent from "./ModalData/ModalContent.json";
import Carousel from "components/Carousel/Carousel";

type Props = {
  type: Projects.ModalType;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal = ({ type, handleClose }: Props) => {
  const contentAry = ModalContent?.[type] || [];
  const imgNameAry = ModalCarousel?.[type] || [];

  return (
    <div className="fixed left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%] z-[2001] w-[80%] h-[80%] overflow-y-scroll bg-purple-700 p-6 text-cyan-500">
      <div className="text-end text-3xl hover:text-white">
        <button type="button" onClick={handleClose}>
          <MdClose />
        </button>
      </div>
      <div className="mt-2">
        {contentAry.map((content) => {
          const isSingleWord = content.length === 1;
          if (isSingleWord) {
            return (
              <p key={content} className="pb-12">
                {content[0]}
              </p>
            );
          }

          return (
            <p key={content} className="pb-12">
              {content.map((word) => {
                if (word?.type === "link") {
                  return (
                    <Link
                      key={word.text}
                      href={word.href}
                      className="block my-2 text-white hover:text-cyan-500 visited:text-cyan-500"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {word.text}
                    </Link>
                  );
                }

                return (
                  <span key={word} className="block">
                    {word}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
      <div className="w-[90%] mx-auto mb-16">
        <Carousel>
          {imgNameAry.map((imgName) => (
            <img
              key={imgName}
              src={`/projects/modal/${type}/${imgName}`}
              alt={`${type} of carousel`}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="w-16 h-16 rounded-full bg-white hover:text-white hover:bg-cyan-500 hover:transition-all hover:ease-in-out hover:duration-300"
          onClick={handleClose}
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default Modal;
