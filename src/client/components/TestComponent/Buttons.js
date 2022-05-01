import PropTypes from "prop-types";
import React from "react";

function Buttons({ text, color, onClick, backgroundColor }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor,
          color: color,
          fontWeight: "bold",
        }}
        className="btn"
      >
        {text}
      </button>
    </>
  );
}

Buttons.defaultProps = {
  color: "white",
  backgroundColor: "blue",
  //   height: "2em",
  //   border: hidden,
  //   borderRadius: "3em",
  //   width: "90%",
  //   margin: auto,
};

Buttons.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Buttons;

/*
height: 2em;
    border: hidden;
    border-radius: 3em;
    width: 90%;
    margin: auto;
    #3e99c0
*/
