import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/allOrders`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      if (error.response?.status === 401) {
        // Token expired or invalid, redirect to login
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!orders.length) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Time</th>
            <th>Instrument</th>
            <th>Mode</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
          {orders.map((order, index) => {
            const date = new Date(order.createdAt);
            const timeString = date.toLocaleString();
            return (
              <tr key={index}>
                <td className="align-left">{timeString}</td>
                <td className="align-left">{order.name}</td>
                <td>{order.mode}</td>
                <td>{order.qty}</td>
                <td>{Number(order.price).toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
