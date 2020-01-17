import React from "react";

const Title = props => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center">
        <h2 className="text-capitalize font-weight-bold">{props.title}</h2>
      </div>
    </div>
  );
};

export default Title;
