import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1>Equitrade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" style={{ width: "180px", height: "auto", marginBottom:"1rem" }}/>
          <p className="text-small text-muted mt-3">
            Thematic investment platform that helps you invest in diversified
            baskets of stocks on ETF.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/sensibullLogo.svg" style={{ width: "200px", height: "auto", marginBottom:"1rem" }} />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/streakLogo.png" style={{ width: "150px", height: "auto" , marginBottom:"1rem"}}/>
          <p className="text-small text-muted mt-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/zerodhaFundhouse.png" style={{ width: "150px", height: "70px", marginBottom:"1rem" }}/>
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/dittoLogo.png" style={{ width: "150px", height: "auto", marginBottom:"1rem" }}/>
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/goldenpiLogo.png" style={{ width: "190px", height: "75px", marginBottom:"1rem" }} />
          <p className="text-small text-muted mt-2">
           Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

          </p>
        </div>

                <button className="p-3 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto"}}>SignUp Now</button>

      </div>
    </div>
  );
}

export default Universe;
