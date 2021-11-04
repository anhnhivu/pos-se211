# POS-System

## Introduction
This is a proposed idea of a POS System that is used to deliver a **non-direct contact** between customer and staff within the restaurant. <br/>
This repo can be cloned and run directly from user's machine by some command in the below section **( _Please refer to the User Manual Section_)**

## Component Structure

```
App
  |___ Homepage
  |           |___ Categories     
  |           |          |___ ItemPage 
  |           |                      |___ Item
  |           |                              |____ PopUp (Modal)
  |           |___ Cart
  |                   |____ ItemCart
  |                                 |___ Confirmation (Modal)  
  |
  |___ Reservepage
  |___ Signup
  |___ Login
  |
  |
  |___ Checkout
  |          |___ VisaCheckOut
  |          |               
  |          |___ MomoCheckout
  |
  |___ Thankyou
```

### State
Cart items are saved in `cart`. `cart` is first defined in `Home.js` and passed down to other files. `cart` is an array, each item in the array is in the following form.
```js
{
  "name": "Name of dish",
  "price": 12.99,
  "src": "src-of-image.png",
  "quantity": 1
}
```
To calculate the total price:
```js
const totalPrice = 0 ? props.cart.length === 0 : props.cart.reduce((total, obj) => {
                        return total + obj["price"] * obj["quantity"]; }, 0).toFixed(2);
```

```javascript
// Home.js
const [cart, setCart] = useState([])
```


### Data

Data is read from file `db.json`. To make sure that the data is fetched properly, make sure that the `package.json` file contains the following lines.

```json
"scripts": {
  "server": "json-server -p3001 --watch db.json"
}
"dependencies": {
  "axios": "^0.21.1" 
}
```


## POS-System User Manual

To run this repo, you may need to run these commands.

- Install `node_modules` folder:
```
npm install
```
- Install any missing libraries:
```
npm install --save react-router-dom
npm install bootstrap jquery
npm install axios
npm install json-server
```
- Run the database: 
```
npm run server
```
- Run the program: 
```
npm start
```
