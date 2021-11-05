import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Item from "./Item";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const ItemPage = (props) => {
  const [items, setItems] = useState([]);

  const itemsToShow = items
    ? items.filter((item) => item.type === props.kind)
    : [];
  const Fetchdata = async () => {
    const db = getFirestore();
    const q = query(collection(db, "items"));
    const querySnapshots = await getDocs(q).then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        setItems((arr) => [...arr, data]);
      });
    });
  };
  // Effect Hook
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <div>
      <Container fluid="md">
        <Row>
          {itemsToShow.map((item) => {
            return (
              <Col sm={props.span} key={item.id}>
                <Item
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  src={item.src}
                  id={item.id}
                  type={item.type}
                  cart={props.cart}
                  setCart={props.setCart}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ItemPage;
