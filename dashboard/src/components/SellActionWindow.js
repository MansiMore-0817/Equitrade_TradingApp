import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { API_URL } from "../utils/config";

import "./BuyActionWindow.css"; // Reuse the same styles

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch available quantity when component mounts
  useEffect(() => {
    fetchAvailableQuantity();
  }, [uid]);

  const fetchAvailableQuantity = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/checkHoldings/${uid}`);
      setAvailableQuantity(response.data.quantity || 0);
      console.log(`Available quantity for ${uid}:`, response.data.quantity);
    } catch (error) {
      console.error("Error fetching available quantity:", error);
      setAvailableQuantity(0);
      if (error.response?.status === 401) {
        // Token expired or invalid, redirect to login
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSellClick = async () => {
    // Validate quantity
    if (stockQuantity > availableQuantity) {
      alert(`Insufficient quantity! You only have ${availableQuantity} shares of ${uid}`);
      return;
    }

    if (stockQuantity <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    try {
      console.log("Submitting sell order:", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      const response = await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      console.log("Sell order saved successfully:", response.data);
      alert("Sell order placed successfully!");
      GeneralContext.closeSellWindow();
    } catch (error) {
      console.error("Error saving sell order:", error);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        window.location.reload();
      } else {
        alert("Failed to place sell order. Please try again.");
      }
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  if (isLoading) {
    return (
      <div className="container" id="sell-window">
        <div className="regular-order">
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading available quantity...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty. (Available: {availableQuantity})</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max={availableQuantity}
              onChange={(e) => setStockQuantity(parseInt(e.target.value) || 0)}
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
              onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Available: {availableQuantity} shares</span>
        <div>
          <Link to="#" className="btn btn-blue" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSellClick();
          }}>
            Sell
          </Link>

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
