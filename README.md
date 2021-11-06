# POS-System

## Introduction
This is a proposed idea of a POS System that is used to deliver a **non-direct contact** between customers and staffs within a restaurant. 
This repo can be cloned and run directly from your machine **(_Please refer to the User Manual Section_)**.

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


## User Manual

To run this repo, you may need to run these commands.

- Install `node_modules` folder:
```
npm install
```
- Install (if missing) libraries:
```
npm install react-router-dom
npm install bootstrap jquery
npm install axios
npm install json-server
```
- Run the program: 
```
npm start
```
