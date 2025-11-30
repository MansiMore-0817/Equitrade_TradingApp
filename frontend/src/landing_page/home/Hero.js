import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container p-5" >
      <div className="row text-center">
        <img src="images/homeHero.png" alt="Hero image" className="mb-5"/>
        <h1 className="mt-5">Invest In Your Future With EquiTrade</h1>
        <p>
          Online platform for trading and investing in stocks, cryptocurrencies,
          and more.
        </p>
        <button 
          className="p-3 btn btn-primary fs-5 mb-5" 
          style={{width: "20%", margin: "0 auto"}}
          onClick={handleSignUpClick}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
