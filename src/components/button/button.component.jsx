import React from "react";
import "./button.styles.css"

export default function Button ({body , Line, seventh}) {
    return (
      <button type="button" id={`input-btn${seventh ? "seventh": ""}`}>
        {body}&nbsp; &nbsp;
        <img src={Line} alt="" />
      </button>
    );
}
