import React, { useState } from 'react';
import '../App.css';
import '../styles/Events.css';
import AliceCarousel from 'react-alice-carousel';
import Modal from 'react-modal';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseButton from 'react-bootstrap/CloseButton';

// ProdCon Event Photos 2023
import pc1 from '../images/prodcon/prodcon1.jpg';
import pc2 from '../images/prodcon/prodcon2.jpg';
import pc3 from '../images/prodcon/prodcon3.jpg';
import pc4 from '../images/prodcon/prodcon4.jpg';
import pc5 from '../images/prodcon/prodcon5.jpg';
import pc6 from '../images/prodcon/prodcon6.jpg';
import pc7 from '../images/prodcon/prodcon7.jpg';
import pc8 from '../images/prodcon/prodcon8.jpg';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(242, 243, 244, 0)', // Adjust the color and transparency as needed
    backdropFilter: 'blur(5px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    width: 'auto',
    maxWidth: '75%',
    maxHeight: '80%',
    overflow: 'hidden',
    backgroundColor: 'rgba(242, 243, 244, 0)', // Adjust the color and transparency as needed
    cursor: 'pointer',
  },
};

export default function ProdConCarousel() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Add this line

  const items = [pc1, pc2, pc3, pc4, pc5, pc6, pc7, pc8];

  const renderNextButton = ({ isDisabled }) => {
    return (
      <div class="prodcon_forward_arrow">
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <div class="prodcon_prev_arrow">
        <ArrowBackIosIcon />
      </div>
    );
  };

  const renderCloseButton = (index) => {
    return (
      <div
        className="close-button"
        onClick={() => {
          closeModal(index);
        }}
      >
        <CloseButton variant="white" style={{ fontSize: '20px' }} />
      </div>
    );
  };

  const [modalIsOpen, setModalIsOpen] = useState(
    Array(items.length).fill(false),
  );

  const openModal = (index) => {
    setCurrentImageIndex(index); // Add this line
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = true;
    setModalIsOpen(updatedModalIsOpen);
  };

  const closeModal = (index) => {
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = false;
    setModalIsOpen(updatedModalIsOpen);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="horizontal-images-container">
      <AliceCarousel
        mouseTracking
        items={items.map((item, index) => (
          <div key={index} className="horizontal-image-item">
            <div className="image-container">
              <div>
                <img
                  src={item}
                  alt={`Image ${index + 1}`}
                  className="resized-image"
                  onClick={() => {
                    if (modalIsOpen[index]) {
                      closeModal(index);
                    } else {
                      openModal(index);
                    }
                  }}
                />
                <Modal
                  isOpen={modalIsOpen[index]}
                  onRequestClose={() => closeModal(index)}
                  style={customStyles}
                  contentLabel="Example Modal"
                  class="small-modal"
                >
                  {renderCloseButton(index)}
                  <div className="modal-content">
                    <button className="modal_prev_arrow" onClick={prevImage}>
                      <ArrowBackIosIcon />
                    </button>
                    <button className="modal_forward_arrow" onClick={nextImage}>
                      <ArrowForwardIosIcon />
                    </button>
                    <img
                      src={items[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="resized-image"
                    />
                  </div>
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
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        autoPlay="true"
        autoPlayInterval={2500}
        disableDotsControls="true"
      />
    </div>
  );
}
