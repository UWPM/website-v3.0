import React, { useState } from "react";
import "../App.css";
import "../styles/Events.css";
import AliceCarousel from 'react-alice-carousel';
import Modal from 'react-modal';

// ProdCon Event Photos
import pc1 from "../images/prodcon/prodcon1.JPG";
import pc2 from "../images/prodcon/prodcon2.JPG";
import pc3 from "../images/prodcon/prodcon3.JPG";
import pc5 from "../images/prodcon/prodcon5.JPG";
import pc6 from "../images/prodcon/prodcon6.JPG";
import pc7 from "../images/prodcon/prodcon7.JPG";
import pc8 from "../images/prodcon/prodcon8.JPG";
import pc9 from "../images/prodcon/prodcon9.JPG";
import pc10 from "../images/prodcon/prodcon10.JPG";


const customStyles = {
  content: {  
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#073948',
    border: 'none',
  },
};

export default function ProjectsTeam() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    pc1,
    pc2,
    pc3,
    pc5,
    pc6,
    pc7,
    pc8,
    pc9,
  ];

  const [modalIsOpen, setModalIsOpen] = useState(Array(items.length).fill(false));

  const openModal = (index) => {
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = true;
    setModalIsOpen(updatedModalIsOpen);
  }

  const closeModal = (index) => {
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = false;
    setModalIsOpen(updatedModalIsOpen);
  }

  return (
    <div className="horizontal-images-container">
      <AliceCarousel
        mouseTracking
        items={items.map((item, index) => (
          <div key={index} className="horizontal-image-item">
            <div className="image-container">
              <div>
                <img src={item} alt={`Image ${index + 1}`} className="resized-image" onClick={() => openModal(index)} />
                <Modal
                  isOpen={modalIsOpen[index]}
                  onRequestClose={() => closeModal(index)}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2>Hello</h2>
                  <img src={item}
                  alt={`Image ${index + 1}`} 
                  className="resized-image"
                  onClick={() => closeModal(index)} />
                </Modal>
              </div>
            </div>
          </div>
        ))}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}
        animationEasingFunction="ease"
        buttonsDisabled={true}
        disableButtonsControls={true}
      />
    </div>
  );
}
