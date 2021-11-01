import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Col, Row } from "react-bootstrap";
import Item from './Item';

const ItemPage = (props) => {

    const [items, setItems] = useState([])


    const itemsToShow = items ? items.filter(item =>
        item.type === props.kind
    ) : []

    // Effect Hook
    useEffect(() => {
        axios
          .get('http://localhost:3001/items')
          .then(response => {
            setItems(response.data)
          })
      }, [])

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