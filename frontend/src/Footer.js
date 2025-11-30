import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250" }}>
      <div className="container border-top mt-2">
        <div className="row mt-5">
          <div className="col-3 ">
            <img src="images/newLogo.png" alt="logo" style={{ width: "70%" }} />
            <p className="mt-3">
              © 2010 - 2025, EquiTrade Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-3 ">
            <p className="fw-bold" style={{ fontSize: "19px" }}>
              Company
            </p>
            <a href="#">Philosophy</a>
            <br />
            <a href="#">About</a>
            <br />
            <a href="#">Press & media</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">EquiTrade Cares (CSR)</a>
            <br />
            <a href="#">EquiTrade.tech</a>
            <br />
            <a href="#">Open source</a>
          </div>
          <div className="col-3 ">
            <p className="fw-bold" style={{ fontSize: "19px" }}>
              Support
            </p>
            <a href="#">Contact</a>
            <br />
            <a href="#">Support Portal</a>
            <br />
            <a href="#">E-Connect Blog</a>
            <br />
            <a href="#">List Of Charges</a>
            <br />
            <a href="#">Downloads & Resources</a>
            <br />
          </div>
          <div className="col-3 ">
            <p className="fw-bold" style={{ fontSize: "19px" }}>
              Account
            </p>
            <a href="#">Open demat Account</a>
            <br />
            <a href="#">Minor demat account</a>
            <br />
            <a href="#">NRI demat account</a>
            <br />
            <a href="#">Commodity</a>
            <br />
            <a href="#">Dematerialisation</a>
            <br />
            <a href="#">Fund Transfer</a>
            <br />
            <a href="#">MTF</a>
            <br />
            <a href="#">Referral Program</a>
            <br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            EquiTrade Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through EquiTrade
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through EquiTrade Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: EquiTrade Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@equitrade.com, for DP related to dp@equitrade.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF{" "}
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="BottomLinks ">
          <ul className="bottom-links-list">
            <li>NSE</li>
            <li>BSE</li>
            <li>MCX</li>
            <li>Terms & Conditions</li>
            <li>Policies & Procedures</li>
            <li>Privacy Policy</li>
            <li>Disclosure</li>
            <li>For investor's attention</li>
            <li>Investor charter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
