import React, {useState, useEffect}from 'react'
import './Modal.css'
function Modal() {
    const [modal, openModal] = useState(false);    
    
    let modalClass = "modal";
    function modalOpen(){
        openModal(true);
        modalClass += " active";
    }
    function modalClose(){
        openModal(false);
        modalClass += " ";
    }
  return (
    <div>
        <img src="/images/JAEGER_12002_1-2-1.jpg" alt="JAEGER" onClick={modalOpen} />
        <div className={modalClass}>
            <div className="modal__content">
                <p onClick={modalClose}>Close</p>
                <img src="/images/JAEGER_12002_1-2-1.jpg" alt="JAEGER"  />
            </div>            
            <div className="bg"></div>
        </div>
    </div>
  )
}

export default Modal
