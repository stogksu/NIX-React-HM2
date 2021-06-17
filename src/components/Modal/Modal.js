import React from "react";
import "../Modal/Modal.css";

const Modal = ({image, close}) => {
    return (
        <div className="modal">
            
                <div className="modal__content">
                    <div className="modal__close" onClick={close}>&times;</div>
                    <img src={`${image}`} alt=""></img>
                </div>
            
        </div>
    );
  };
  
  export default Modal;