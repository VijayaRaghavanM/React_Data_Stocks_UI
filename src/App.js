import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import ReturnsBar from "./ReturnsBar";
import PieChart from "react-minimal-pie-chart";

import data from "./data";
function App() {
  let mf = 0,
    etf = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type == "MF") {
      mf += data[i].percentage;
    }
  }
  mf = Math.round(mf);
  etf = 100 - mf;
  console.log(mf, etf);
  return (
    <div className="app">
      <div className="chart">
        <PieChart
          data={[
            { title: "MF", value: etf, color: "#E38627" },
            { title: "ETF", value: mf, color: "#C13C37" }
            // { title: "Three", value: 20, color: "#6A2135" }
          ]}
        />
        <div className="mf">MF</div>
        <div className="etf">ETF</div>
      </div>
      <div>
        {data.map(item => {
          return (
            <div className="card">
              <div className="col1">
                <div>&#9776;</div>
              </div>
              <div className="col2">
                <div className="name">{item.scrip}</div>
                <div className="price">${item.price}</div>
              </div>
              <div className="col3">
                <div className="ishares">iShares</div>
                <div className="index_name">S&P</div>
                <div className="index_subname">Developed Market Equity</div>
              </div>
              <div className="col4">
                <div className="quantity">Quantity</div>
                <div className="avg_cost">Avg. Cost</div>
                <div className="invested_amt">Invested Amt</div>
                <div className="quantity_val">{item.quantity}</div>
                <div className="avg_cost_val">${item.avg_cost}</div>
                <div className="invested_amt_val">${item.invested_amount}</div>
              </div>

              <div className="col5">
                <div className="market_value">
                  Market Value: ${item.price * item.quantity}
                </div>
                <div className="portfolio_value">
                  % of portfolio value {item.percentage}
                </div>
                <div className="portfolio_value_bar">
                  <ProgressBar progress={60} />
                </div>
              </div>
              <div className="col6">
                <div className="unrealized">
                  Unrealized P/L: ${item.unrealiszed_p_l}
                </div>
                <div className="return">
                  % Return{" "}
                  {item.return_percent < 0 && (
                    <>
                      {" "}
                      <span className="up">&#8600; </span>
                      <span>{-item.return_percent}</span>
                    </>
                  )}
                  {item.return_percent > 0 && (
                    <>
                      {" "}
                      <span className="down">&#8599; </span>
                      <span>{item.return_percent}</span>
                    </>
                  )}
                  {item.return_percent === 0 && (
                    <>
                      <span>{item.return_percent}</span>
                    </>
                  )}
                </div>
                <div className="return_bar">
                  <ReturnsBar val={item.return_percent} />
                </div>
              </div>
              <div className="col7">
                <Button>BUY</Button>
                <Button>SELL</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
