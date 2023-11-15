import React, { useState } from 'react';
import '../App.css';
import '../styles/Events.css';
import AliceCarousel from 'react-alice-carousel';
import Modal from 'react-modal';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// ProdCon Event Photos
import pc1 from '../images/prodcon/prodcon1.JPG';
import pc2 from '../images/prodcon/prodcon2.JPG';
import pc3 from '../images/prodcon/prodcon3.JPG';
import pc5 from '../images/prodcon/prodcon5.JPG';
import pc6 from '../images/prodcon/prodcon6.JPG';
import pc7 from '../images/prodcon/prodcon7.JPG';
import pc8 from '../images/prodcon/prodcon8.JPG';
import pc9 from '../images/prodcon/prodcon9.JPG';
import pc10 from '../images/prodcon/prodcon10.JPG';

const customStyles = {
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
    backgroundColor: '#F2F3F4',
    cursor: 'pointer',
  },
};

export default function ProjectsTeam() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [pc1, pc2, pc3, pc5, pc6, pc7, pc8, pc9, pc10];

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

  const [modalIsOpen, setModalIsOpen] = useState(
    Array(items.length).fill(false),
  );

  const openModal = (index) => {
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = true;
    setModalIsOpen(updatedModalIsOpen);
  };

  const closeModal = (index) => {
    const updatedModalIsOpen = [...modalIsOpen];
    updatedModalIsOpen[index] = false;
    setModalIsOpen(updatedModalIsOpen);
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
                  onClick={() => openModal(index)}
                />
                <Modal
                  isOpen={modalIsOpen[index]}
                  onRequestClose={() => closeModal(index)}
                  style={customStyles}
                  contentLabel="Example Modal"
                  class="small-modal"
                >
                  <img
                    src={item}
                    alt={`Image ${index + 1}`}
                    className="resized-image"
                    onClick={() => closeModal(index)}
                  />
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
