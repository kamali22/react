import React from "react";
 
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box" align="right">
        <h1 className="popup-title">Who we are?</h1>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <hr></hr>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;