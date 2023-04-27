import React from "react";
import Link from "next/link";
import ModalCarousel from "./ModalData/ModalCarousel.json";
import ModalContent from "./ModalData/ModalContent.json";
import Carousel from "components/Carousel/Carousel";
import styles from "./Modal.styles";

type Props = {
  type: Projects.ModalType;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal = ({ type, handleClose }: Props) => {
  const contentAry = ModalContent?.[type] || [];
  const imgNameAry = ModalCarousel?.[type] || [];

  return (
    <div className="modal">
      <button
        type="button"
        className="modal__close-icon"
        onClick={handleClose}
      />
      {contentAry.map((content) => {
        const isSingleWord = content.length === 1;
        if (isSingleWord) {
          return (
            <p key={content} className="modal__content">
              {content[0]}
            </p>
          );
        }

        return (
          <p key={content} className="modal__content">
            {content.map((word) => {
              if (word?.type === "link") {
                return (
                  <Link key={word.text} href={word.href}>
                    <a
                      className="modal__content__link"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{ display: "block" }}
                    >
                      {word.text}
                    </a>
                  </Link>
                );
              }

              return (
                <span key={word} className="modal__content__text">
                  {word}
                </span>
              );
            })}
          </p>
        );
      })}
      <div className="modal__carousel">
        <div className="modal__carousel__item">
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
      </div>
      <div className="flex justify-content-end">
        <button
          type="button"
          className="modal__buttom-close"
          onClick={handleClose}
        >
          關閉
        </button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Modal;
