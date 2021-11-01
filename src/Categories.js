import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';
import ItemPage from "./ItemPage";
import 'jquery';


const Categories = (props) => {
    return (
        <div className="card rounded-3 mb-3">
           <Tabs variant="pills" id="Tab" defaultActiveKey="Combo" 
                className="my-3 mx-4 flex nav-fill">

            <Tab eventKey="Combo" title="COMBO">
              <ItemPage kind="Combo" key="100" span="6" cart={props.cart} setCart={props.setCart}/>
            </Tab>

            <Tab eventKey="Pizza" title="PIZZA">
              <ItemPage kind="Pizza" key="200" span="4" cart={props.cart} setCart={props.setCart}/>
            </Tab>

            <Tab eventKey="Starter" title="STARTER">
              <ItemPage kind="Starter" key="300" span="4" cart={props.cart} setCart={props.setCart}/>
            </Tab>

            <Tab eventKey="Pasta" title="PASTA">
              <ItemPage kind="Pasta" key="400" span="4" cart={props.cart} setCart={props.setCart}/>
            </Tab>

            <Tab eventKey="Drink" title="DRINK">
              <ItemPage kind="Drink" key="500" span="4" cart={props.cart} setCart={props.setCart}/>
            </Tab>

          </Tabs>

        </div>
    )
}


export default Categories;