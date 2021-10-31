import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cartIcon from './Images/cart.png';
import { Modal, Col, Row, Button } from "react-bootstrap";
import $ from "jquery";

const Item = (props) => {

    const[modalIsOpen, setModalOpenState] = useState(false);
    const closeModal = () => {
      setModalOpenState(false);
    }
    const openModal = () => {
      setModalOpenState(true);
    }
    const saveNote = () => {
        if ($('#note').val() === "") {
            alert("Nothing is entered!");
        }
        else {
            var note = $('#note').val();
            alert("Your note is well received: " + note);
        }
        closeModal();
    }

    return (
        <div>
            <div className="card h-100 mb-3">
                <img 
                    draggable="false" 
                    src={props.src}
                    className="card-img-top" 
                    onClick={() => openModal()}
                    alt="..."/>

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
                        onClick={() => {
                            let indexInArray = -1;
                            indexInArray = props.cart.map(function(item) 
                                 {return item.id}).indexOf(props.id);
                            if (indexInArray !== -1) {
                                // const num = parseInt(props.cart[indexInArray]["quantity"]);
                                props.cart[indexInArray]["quantity"] += 1;
                                props.setCart(props.cart.concat());
                            }
                            else {
                                const newItemInCart = [{
                                    "name": props.name,
                                    "price": props.price,
                                    "src": props.src, 
                                    "id": props.id,
                                    "quantity": 1
                                }];
                                props.setCart(props.cart.concat(newItemInCart));
                            }
                        }}
                        alt=".."/>
                </span>
                </div>
            </div>
            <Modal show={modalIsOpen} onHide={() => closeModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Row className="d-flex justify-content-between align-items-start">
                                <Col sm={2} className="mb-3">
                                <img 
                                    draggable="false" src={props.src}
                                    className="w-100" alt="..."/>
                                </Col>
                                <Col sm={1} className="mx-3">
                                    <Row className="fw-bold">SKU</Row>
                                    <Row>{props.id}</Row>
                                </Col>

                                <Col sm={4} className="mx-3">
                                    <Row className="fw-bold">{props.type}</Row>
                                    <Row>{props.name}</Row>
                                </Col>

                                <Col sm={2} className="mx-3">
                                    <Row className="fw-bold">Price</Row>
                                    <Row>{props.price}</Row>
                                </Col>
                                
                                
                            </Row>
                        </div>
                        <p></p>
                        <hr/>

                        <Row className="d-flex justify-content-between align-items-center">
                            <Col sm={3} className=" mx-3 fw-bold"> <big>Quantity</big></Col>
                            <Col sm={6} className="myButton d-flex justify-content-center align-items-center">
                                <Button variant="outline-danger" onClick={() => {
                                    
                                }}> - </Button>
                                <span className="mx-3 fw-bold"> {1} </span>
                                <Button variant="outline-danger" onClick={() => {
                                    
                                }}> + </Button>
                            </Col>
                        </Row>

                        <hr/>
                        <p></p>
                        <p>
                            <b>Ingredients</b>
                            <br/>
                            Flour, egg, meat, tomato
                        </p>
                        <p className="fw-bold">Note</p>

                        <textarea id="note" className="w-100" placeholder="You may leave your notes here"/>
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
        </div>
    )
}

export default Item;