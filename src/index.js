//....object......module
//importing react makes use of babel
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
//document.getElementByID specifies where in the real DOM we want 
//to render this
//this is plain vanilla javascript 
//this react DOM gets gets a reference to getElementById
//and renders element inside of that element
ReactDOM.render(element,document.getElementById('root'));
