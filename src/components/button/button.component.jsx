import React from "react";
import "./button.styles.css"

export default function Button ({body , Line}) {
    return (
      <button type="button" id="input-btn">
        {body}&nbsp; &nbsp;
        <img src={Line} alt="" />
      </button>
    );
}
