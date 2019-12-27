import React from "react";

function PageError(props) {
  return <div className="text-center">{props.error.message} ❌</div>;
}

export default PageError;
