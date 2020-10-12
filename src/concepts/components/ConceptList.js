import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#modal_window");
function ConceptList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(() => true);
  }
  function closeModal() {
    setModalIsOpen(() => false);
  }
  return (
    <div>
      <ul>
        {props.concepts.map((concept) => {
          return (
            <li key={concept.id}>
              <b>{concept.name}</b>
              <p>{concept.content}</p>
              <p>{concept.creatorId}</p>
              <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={
                {
                  overlay: {
                    backgroundColor:'grey',
                    
                  },
                  content: {
                    top: '20%',
                    left: '20%',
                    width: '50%',
                    height: '50%'
                  }
                }
              }>
                <h2>Title</h2>
                <p>Body</p>
                <button onClick={closeModal}>Close</button>
              </Modal>
              <button onClick={openModal}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConceptList;
