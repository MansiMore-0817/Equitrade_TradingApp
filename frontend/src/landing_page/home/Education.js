import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
            <img src="images/education.svg" alt="Education Illustration" style={{width: "70%"}}/>
        </div>
        <div className="col-6">
          <h1 className="fs-2">Free and open market education</h1>
          <p >
            Varsity, the largest online stock market education book in the world<br/> covering everything from the basics to advanced training.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          
          <p className="mt-5">
            TradingQ&A, a community-driven forum where traders and investors can ask questions,<br/> share insights, and learn from each other.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
