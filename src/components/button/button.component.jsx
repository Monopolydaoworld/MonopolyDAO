import React from "react";
import "./button.styles.css"

export default function Button ({body , Line, seventh, disabled, onClick, isLoading}) {
    return (
      <button
        type="submit"
        id={`input-btn${seventh ? "seventh" : ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        {isLoading ? (
          "Submitting..."
        ) : (
          <>
            {body}&nbsp; &nbsp; <img src={Line} alt="" />
          </>
        )}
      </button>
    );
}
