import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cartIcon from './Images/cart.png';
import {Modal} from "react-bootstrap";
import $ from "jquery";

const PopUp = (props) => {
    const[modalIsOpen, setModalOpenState] = useState(true);
    const closeModal = () => {
      setModalOpenState(false);
    }
    const openModal = () => {
      setModalOpenState(true);
    }
    const saveNote = () => {
      var note = ($('#note').val() !== "")? $('#note').val() : "No note";
      alert("Lel I don't know where to put this note just yet since the add to cart function is not up (at the time of writing this) but here it is anyway:\n" + note);
      closeModal();
    }
    
    return (
        <div>
            <div className="card h-100 mb-3">
                <img 
                    draggable="false" 
                    src={props.src}
                    className="card-img-top" 
                    alt="..."
                    onClick={() => openModal()}/>

                <Modal show={modalIsOpen} onHide={() => closeModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Ingredients: uh... might need to add these to the database</p>
                        <p>Note:</p>
                        <textarea id="note" className="modal-note" placeholder="You may leave your notes here"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-sm btn-danger rounded-pill" onClick={() => closeModal()}>
                            Close
                        </button>
                        <button className="btn btn-sm btn-danger rounded-pill" onClick={() => saveNote()}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

                <div className="card-body">
                <h5 className="card-title text-truncate-container overflow-hidden" 
                    style={{height:50}}>{props.name}
                </h5>

                <span className="d-flex justify-content-between align-items-center">
                $ {props.price}
                    <input type="image"
                        style={{width:30}} 
                        draggable="false" 
                        src={cartIcon}
                        alt=".."/>
                </span>
                
                </div>
            </div>
        </div>
    )
}

export default PopUp;