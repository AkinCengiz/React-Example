import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Car{
  constructor(name){
    this.brand = name;
  }

  present(){
    return 'My car is a ' + this.brand;
  }
}

class Model extends Car{
  constructor(name, mod){
    super(name);
    this.model = mod;
  }

  show(){
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar = new Car("Ford");
const myModel = new Model("Ford", "Mustang");
root.render(
  <>
    <h1>{myCar.brand}</h1>
    <p>{myCar.present()}</p>
    <h1>{myModel.brand}</h1>
    <p>{myModel.show()}</p>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
