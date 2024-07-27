import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="mainDiv">
      <nav className="container">
        <di v className="nikeLogo">
          <img src="public/image/brand_logo.png" className="nike-image" />
        </di>
        <ul className="contact">
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONSTATS</li>
        </ul>
        <button className="login">Login</button>
      </nav>
      <main className="hero container">
        <div className="hero-content">
          <h1 className="h1">YOUR FEET DESERVE THE BEST</h1>
          <p className="para">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-button">
            <button className="showButton">Shop Now</button>
            <button className="CategoryButton">Catergory</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
          </div>
          <div className="brand-icons">
            <img src="public/image/flipkart.png" />
            <img src="public/image/amazon.png" />
          </div>
        </div>
        <div className="heroimage">
          <img src="public/image/shoe_image.png" height={"487px"} width={"530"} />
        </div>
      </main>
    </div>
  );
}
