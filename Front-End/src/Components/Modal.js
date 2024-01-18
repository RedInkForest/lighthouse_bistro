import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css'

function Modal() {
    return (
            <Popup
              trigger={<button className="button-1"> Reservations </button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className='border'>
                    <div className='header'>Reservations</div>
              
                  </div>
                  
                </div>
              )}
            </Popup>
          
    );
} 

export default Modal