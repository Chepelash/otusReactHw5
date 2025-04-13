import { useState } from "react";
import "./modalPortal.css";
import { createPortal } from "react-dom";
import { ModalContent } from "../modalContent/ModalContent";

export const ModalPortal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="bigBox">
      <button onClick={() => setShowModal(true)}>modal popup</button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </div>
  );
};
