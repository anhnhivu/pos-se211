import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import Item from './Item';
import db from './firebaseConfig';

const ItemPage = (props) => {

    const [items, setItems] = useState([])


    const itemsToShow = items ? items.filter(item =>
        item.type === props.kind
    ) : []

    useEffect(() => {
        Fetchdata();
      }, []);

    
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("items").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setItems(arr => [...arr , data]);
                  
            });
        })
    }

    return (
        <div>
            <Container fluid="md">
                <Row>
                    {itemsToShow.map(item => {
                        return (
                        <Col sm={props.span} key={item.id}>
                            <Item key={item.id}
                                name={item.name}
                                price={item.price}
                                src={item.src}
                                id={item.id}
                                type={item.type}
                                cart={props.cart} setCart={props.setCart}
                                />
                        </Col>
                    )})}
                </Row>
            </Container>
            
        </div>
    )
}


export default ItemPage;