import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';
import { Button, Row, Col } from "react-bootstrap";

const ItemCart = (props) => {
    const indexInArray = props.cart.map(function(item) 
                        {return item.id}).indexOf(props.id);
    return (
        <div>
            <li className="mb-3">
                <Row> 
                <Col sm={3} className="d-flex justify-content-stretch align-items-center">
                <img className="w-100 rounded border" alt="..."
                            src={props.src}/>
                </Col>
                <Col sm={4} className="">
                    <Row className="fw-bold text-danger">
                    <Col sm={12} className="d-flex justify-content-start align-items-center">
                        {props.name}
                    </Col>
                    </Row>
                    <Row className="fw-bold">
                    <Col sm={12} className="d-flex justify-content-start align-items-center">
                        {(props.price * props.quantity).toFixed(2)}
                    </Col>
                    </Row>
                    
                </Col>
                <Col sm={5} className="myButton d-flex justify-content-center align-items-center">
                    <Button variant="outline-danger" onClick={() => {
                        props.cart[indexInArray]["quantity"] -= 1;
                        props.setCart(props.cart.concat());
                        if (props.cart[indexInArray]["quantity"] === 0) {
                            props.setCart(props.cart.filter(cartItem => cartItem.id !== props.id));
                        }
                    }}> - </Button>
                    <span className="mx-3 fw-bold"> {props.cart[indexInArray]["quantity"]} </span>
                    <Button variant="outline-danger" onClick={() => {
                        props.cart[indexInArray]["quantity"] += 1;
                        props.setCart(props.cart.concat());
                    }}> + </Button>
                </Col>
                </Row>
                
            </li>
        </div>
    )
}

const Cart = (props) => {

    const totalPrice = 0 ? props.cart.length === 0 
                : props.cart.reduce((total, obj) => {
                    return total + obj["price"] * obj["quantity"];
                 }, 0).toFixed(2);

    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column flex-row align-items-stretch">
                <h5 className="d-flex justify-content-between align-content-center">
                    <span>Order</span>
                    <button 
                        onClick={() => {props.setCart([])}}
                        className="btn btn-sm btn-danger rounded-pill">Clear</button>
                </h5>
            <hr/>
            
            <ul id="orderlist" className="list-unstyled d-flex flex-column align-items-stretch">
                {props.cart.map(itemInCart => {
                    return <ItemCart
                    key= {itemInCart.id}
                    id= {itemInCart.id}
                    src= {itemInCart.src}
                    name= {itemInCart.name}
                    price= {itemInCart.price}
                    quantity= {itemInCart.quantity}
                    cart = {props.cart}
                    setCart = {props.setCart}
                />
                })}
            </ul>
            

            <div className="align-self-stretch mt-auto">
                <hr/>
                <ul className="list-unstyled">
                <li className="fw-bold d-flex justify-content-between align-items-center">
                    Total 
                    <big> $ <span id="totalcost" className="card-text">
                        {totalPrice}
                    </span>
                    </big>
                </li>
                <li><p></p></li>
                <li>
                    <button className="btn btn-danger fw-bold w-100 rounded-pill">CHECK OUT</button>
                </li>
                </ul>
            </div>
            
            </div>
        </div>
    )
}

export default Cart;