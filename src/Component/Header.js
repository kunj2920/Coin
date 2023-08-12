import React from "react";
import "../css/Header.css";
import a from "../asset/KP.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div class="header">
 
  <img src ={a} height="70" width="100"></img>
  <div class="header-right">
   
   <Link to="/">Home</Link>
   <Link to="/Coin">Coin</Link>
   <Link to="/Exchanges">Exchanges</Link>
   <Link to="/Contact">Contact</Link>
  
   
  
  </div> 
    </div>
  );
}

export default Header;