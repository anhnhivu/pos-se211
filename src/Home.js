import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Categories from "./Categories";
import Cart from "./Cart";
import './App.css';
import { useState } from "react";

const Home = () => {
    let currentDate = new Date().toString().slice(0,15);
    let currentTime = new Date().toString().slice(16,21);

    const [cart, setCart] = useState([])

    return (
        <div>
            <div className="bg-dark p-1 rounded">
                
                <div className="row mx-0 py-3 bg-light rounded">
                    <p>
                        Order #88 <small>  
                                Today, {currentDate}, {currentTime} PM 
                            </small>
                        </p>
                    <div className="col-sm-8 mb-3 truncate-container">
                        
                        <Categories cart={cart} setCart={setCart}/>      
                    </div>
                    <div className="col-sm-4 mb-3">
                        <Cart cart={cart} setCart={setCart}/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Home; 