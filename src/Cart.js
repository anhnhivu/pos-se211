import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';

const Cart = () => {
    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column flex-row align-items-stretch">
                <h5 className="d-flex justify-content-between align-items-center">
                    <span>Order</span>
                    <button 
                        className="btn btn-sm btn-danger rounded-pill">Clear</button>
                </h5>
            <hr/>
            
            <ul id="orderlist" className="list-unstyled d-flex flex-column align-items-stretch">

            </ul>
            

            <div className="align-self-stretch mt-auto">
                <hr/>
                <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                    <big>Total Items: </big>
                    <big id="totalitems" className="card-text">0</big>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                    <big>Total Amount: </big>
                    <big className="fw-bold"> $ <span id="totalcost" className="card-text">0.00</span>
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