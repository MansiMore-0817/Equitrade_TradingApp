import React from "react";

function Stats() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>
          <h2 className="fs-4">Investor-first approach</h2>
          <p className="text-muted">
            That’s why thousands of users trust EquiTrade to handle crores worth
            of smart investments securely and transparently.
          </p>
          <h2 className="fs-4">No clutter or noise</h2>
          <p className="text-muted">
            No spam, ads, or unnecessary alerts — just a clean, focused trading experience built for clarity and control.
          </p>
          <h2 className="fs-4">The EquiTrade ecosystem</h2>
          <p className="text-muted">
            More than just a trading app — it’s an intelligent ecosystem that connects you with insightful analytics, portfolio tracking, and tools tailored to your goals.
          </p>
          <h2 className="fs-4">Grow smarter, invest better</h2>
          <p className="text-muted">
            With smart features like Auto-Insight and RiskGuard, we don’t just execute trades — we help you invest strategically and grow with confidence.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="images/ecosystem.png"
            style={{ width: "95%" }}
            className="mt-5"
          />
          <div className="text-center">
            <a href="" className="mx-3" style={{textDecoration: "none"}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a> /&nbsp;&nbsp;&nbsp;
            <a href=""  style={{textDecoration: "none"}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
