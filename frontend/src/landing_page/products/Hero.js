import React from "react";

function Hero() {
  return (
    <>
      <div className="container border-bottom mb-5">
        <div className="row text-center mt-5 mb-5 ">
          <h1 >Equitrade Products</h1>

          <h3 className="text-muted fs-4 mt-3">Your one-stop solution for all trading needs</h3>
          <p className="text-muted mt-2">
           
              Check out our  <a
              href="#"
              
              style={{ textDecoration: "none", color: "blue" }}
              onMouseOver={(e) => (e.target.style.color = "black")}
              onMouseOut={(e) => (e.target.style.color = "blue")}
            > investment offerings →
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
