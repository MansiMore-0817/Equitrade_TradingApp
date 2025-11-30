import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row mt-5 mb-5 border-bottom pt-4  text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mb-5 fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
                <img src="images/pricingEquity.svg" alt="img" />
                <h1 style={{fontSize:"22px", marginBottom:"10px"}}>Free equity delivery</h1>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-4">
               <img src="images/intradayTrades.svg" alt="img" />
                <h1 style={{fontSize:"22px", marginBottom:"10px"}}>Intraday and F&O trades</h1>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-4 ">
               <img src="images/pricingEquity.svg" alt="img" />
                <h1 style={{fontSize:"22px", marginBottom:"10px"}}>Free direct MF</h1>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
