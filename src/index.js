import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css";
import App from "./components/App";

function Display(){
  
  return(
    <div>
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Display />);