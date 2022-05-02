import React from "react";
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
      {contentAry.map((_, index) => (
        <p key={index} className="modal__content-text">
          {contentAry[index]}
        </p>
      ))}
      <div className="modal__carousel">
        <div className="modal__carousel__item">
          <Carousel>
            {imgNameAry.map((_, index) => {
              const src = `/projects/modal/${type}/${imgNameAry[index]}`;

              return (
                <img
                  key={`__carousel__item__${index}`}
                  src={src}
                  alt={`${type} of carousel`}
                />
              );
            })}
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
