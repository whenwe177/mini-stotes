import { FaTimes } from "react-icons/fa"

import "../styles/modal.css";

function Modal(props) {
  const { showClass, element: Element, callback, onClose } = props;


  const classList = `modal ${showClass}`

  return (
    <div className={classList}>
        <FaTimes className="modal__cross" onClick={ onClose }/>
      <Element callback={ callback } onClose= { onClose }/>
    </div>
  );
}

export default Modal;
