import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";

import axios from "axios";
import GeneralContext from "./GeneralContext";


import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const labels = watchlist.map((subArray) => subArray["name"]);

const Watchlist = () => {
  const data = {

      labels,
      datasets: [
        {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        }
      ]



    // labels,
    // datasets: [
    //   {
    //     label: "Price",
    //     data: watchlist.map((stock) => stock.price),
    //     backgroundColor: [
    //       "rgba(255, 99, 132, 0.5)",
    //       "rgba(54, 162, 235, 0.5)",
    //       "rgba(255, 206, 86, 0.5)",
    //       "rgba(75, 192, 192, 0.5)",
    //       "rgba(153, 102, 255, 0.5)",
    //       "rgba(255, 159, 64, 0.5)",
    //     ],
    //     borderColor: [
    //       "rgba(255, 99, 132, 1)",
    //       "rgba(54, 162, 235, 1)",
    //       "rgba(255, 206, 86, 1)",
    //       "rgba(75, 192, 192, 1)",
    //       "rgba(153, 102, 255, 1)",
    //       "rgba(255, 159, 64, 1)",
    //     ],
    //     borderWidth: 1,
    //   },
    // ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search e.g. 
           infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default Watchlist;

// The below code can be written in separate file(WatchListItem being a separate component) as welll..but as we arent use it anywhere else and its tightly bound to this part so we writing it here below.

// many ways to create this we can write iit as a function or as a const variable

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };
  return (
    <span className="actions" onClick={(e) => e.stopPropagation()}>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
