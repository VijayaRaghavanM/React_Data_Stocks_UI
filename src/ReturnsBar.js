import React, { Component } from "react";
import "./ReturnsBar.css";

class ReturnsBar extends Component {
  state = {};
  render() {
    return (
      <div className="outer1">
        {this.props.val > 0 ? (
          <div>
            <div
              className="inner1"
              style={{ transform: "scaleX(" + 0 + ")" }}
            />
            <div
              className="inner2"
              style={{ transform: "scaleX(" + this.props.val / 100 + ")" }}
            />
          </div>
        ) : (
          <div>
            <div
              className="inner1"
              style={{ transform: "scaleX(" + -this.props.val / 100 + ")" }}
            />
            <div
              className="inner2"
              style={{ transform: "scaleX(" + 0 + ")" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ReturnsBar;
