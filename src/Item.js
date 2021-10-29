import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cartIcon from './Images/cart.png';

const Item = (props) => {

    return (
        <div>
            <div className="card h-100 mb-3">
                <img 
                    draggable="false" 
                    src={props.src}
                    className="card-img-top" 
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
                        alt=".."/>
                </span>
                
                </div>
            </div>
        </div>
    )
}

export default Item;