import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { API_URL } from "../utils/config";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      console.log("Submitting order:", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      const response = await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      console.log("Order saved successfully:", response.data);
      alert("Order placed successfully!");
      GeneralContext.closeBuyWindow();
    } catch (error) {
      console.error("Error saving order:", error);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        window.location.reload();
      } else {
        alert("Failed to place order. Please try again.");
      }
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link to="#" className="btn btn-blue" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBuyClick();
          }}>
            Buy
          </Link>
          {/* <Link className="btn btn-blue" onClick={() => console.log("clicked")}>Buy</Link> */}

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;