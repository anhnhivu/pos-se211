import React from 'react';
const ItemPurchase = (props) => {
    return(
        <li className="d-flex justify-content-between align-items-center" style={{marginTop:'10px'}}>
            <img src={props.src} className="w-25 rounded img-fluid" alt="..." style={{marginLeft:'7px'}}/>
            <span>{props.name}</span>
            <span > x{props.quantity} </span>
            <span className="text-danger" style={{marginRight:'10px'}}>{'$' + props.price*props.quantity}</span>
        </li>
    );
}

const PurchasePopup = (props) => {
    return (
        <div>
            <ul className="list-unstyled">
                {props.cart.map(itemInCart => {
                    return <ItemPurchase
                    key={itemInCart.id}
                    src= {itemInCart.src}
                    name= {itemInCart.name}
                    price= {itemInCart.price}
                    quantity= {itemInCart.quantity}
                    cart = {props.cart}
                    setCart = {props.setCart}/>
                })}
            </ul> 
        </div>
            
    );
}
export default PurchasePopup;