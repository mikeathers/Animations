import React from "react";
import Modal from "react-modal";

import "./Modal.scss";

const sModal = props => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isModalOpen}
      contentLabel="Default Modal"
      className="default-modal"
    >
      <div className="default-modal__header">
        <h3>{props.title}</h3>
      </div>
      <hr />
      <div className="default-modal__body">
        {`${props.message} ${props.item !== undefined ? props.item : ""}`}
      </div>
      <hr />
      <div className="default-modal__footer">{props.children}</div>
    </Modal>
  );
};

export { sModal as Modal };
