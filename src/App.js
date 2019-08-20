import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import ReturnsBar from "./ReturnsBar";
import data from "./data";
function App() {
  return (
    <>
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
              <div className="market_value">Market Value: $9876</div>
              <div className="portfolio_value">% of portfolio value 40%</div>
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
    </>
  );
}

export default App;
