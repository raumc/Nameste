import React from 'react';
import ReactDOM from 'react-dom/client'; 

const heading=React.createElement("h1",{id:"heading"},[
    React.createElement("div",{id:"child"},"I am child one"),
    React.createElement("div",{id:"childTwo"},"I am child two")
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);