import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5  border-top">
        <h1 className=" text-center mt-5">People</h1>
      </div>
      <div
        className="row mb-5  pt-4 text-muted"
        style={{ lineHeight: "1.5", fontSize: "18px" }}
      >
        <div className="col-6  p-3 text-center">
          <img
            src="/images/mansi_img.jpeg"
            alt="ppl"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Mansi More</h4>
          <h6>CEO, Founder</h6>
        </div>
        <div className="col-6  p-3" style={{ fontSize: "18px" }}>
          Mansi founded Equitrade in 2025, driven by her passion for building
          smarter, real-time trading experiences. Coming from a strong
          MERN-stack and systems engineering background, she bootstrapped the
          platform from the ground up—crafting everything from the product
          vision to the technical architecture.
          <br />
          <br />
          She's passionate about writing clean code, designing smooth user flows,
          and learning new tech whenever she can.
          <br />
          <br />
          Writing is her zen.
          <br />
          <br />
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
