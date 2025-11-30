import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
        <h3 style={{fontSize: "35px", color:"#4B4950"}}>Charges Explained</h3>
      <div className="row mt-5">
        <div className="col-6">
          <h5 style={{color:"#736D7D"}}>Securities/Commodities transaction tax</h5>
          <p className="text-muted" style={{ fontSize: "14px" }} >
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            <br /> When trading at EquiTrade, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h5 style={{color:"#736D7D"}}>Transaction/Turnover Charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br /> BSE has revised transaction charges in XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have
            been merged into a new group X w.e.f 01.12.2017) BSE has revised
            transaction charges in SS and ST groups to ₹1,00,000 per crore of
            gross turnover.
            <br /> BSE has revised transaction charges for group A, B and other
            non exclusive scrips (non-exclusive scrips from group E, F, FC, G,
            GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross turnover.
          </p>
          <h5 style={{color:"#736D7D"}}>Call & trade</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h5 style={{color:"#736D7D"}}>NRI brokerage charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            <ul>
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>
          <h5 style={{color:"#736D7D"}}>Account with debit balance</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h5 style={{color:"#736D7D"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            <ul>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options
              </li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <h5 style={{color:"#736D7D"}}>GST</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h5 style={{color:"#736D7D"}}>SEBI Charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h5 style={{color:"#736D7D"}}>DP (Depository participant) charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
            <br /> Female demat account holders (as first holder) will enjoy a
            discount of ₹0.25 per transaction on the CDSL fee.
            <br /> Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h5 style={{color:"#736D7D"}}>Pledging charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <h5 style={{color:"#736D7D"}}>AMC (Account maintenance charges)</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.<br/> To learn more about BSDA, <a href="" style={{textDecoration:"none"}}>Click here</a> For non-BSDA
            demat accounts: ₹300/year + 18% GST charged quarterly (90 days).<br/> To
            learn more about AMC, <a href="" style={{textDecoration:"none"}}>Click here</a>
          </p>
          <h5 style={{color:"#736D7D"}}>Corporate action order charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
           ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
          </p>
          <h5 style={{color:"#736D7D"}}>Off-market transfer charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
           ₹25 per transaction.
          </p>
          <h5 style={{color:"#736D7D"}}>Physical CMR request</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
           First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
          </p>
          <h5 style={{color:"#736D7D"}}>Payment gateway charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
           ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h5 style={{color:"#736D7D"}}>Delayed Payment Charges</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
           Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="" style={{textDecoration:"none"}}>Learn more.</a>
          </p>
          <h5 style={{color:"#736D7D"}}>Trading using 3-in-1 account with block functionality</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
             <ul>
                <li><b>Delivery & MTF Brokerage:</b> 0.5% per executed order.</li>
                <li><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
             </ul>
          </p>


        </div>
      </div>
      <div className="row mt-3 mb-5">
        <h5 style={{color:"#736D7D"}}>Disclaimer</h5>
        <p className="text-muted" style={{ fontSize: "14px" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  );
}

export default Brokerage;
