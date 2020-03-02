import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center pt-4">
            <h2 className="display-3">404</h2>
            <h3>
              The requested URL{" "}
              <span className="text-danger">
                "{this.props.location.pathname}"
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
