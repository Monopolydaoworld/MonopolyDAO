import React from "react";
import "./homepage.styles.css"
import Button from "../button/button.component";
import Line from "../../assets/Line 5.png";

export default function Homepage () {
    return (
      <section className="first-section">
        <div className="section-header">
          <h1>JOIN THE FUTURE OF PROPERTY OWNERSHIP</h1>
          <p>
            MonopolyDAO is redefining property ownership by leveraging
            decentralized finance.
          </p>
        </div>
        <div className="form-input" id="form-input">
          <form action="#" method="post" id="form">
            <input
              type="email"
              placeholder="Email Address"
              id="input-text"
              name="email"
              required
            />
            <Button body={"Join the Waitlist"} Line={Line}/>
          </form>
        </div>
        <p id="success-message">You’re all set! We’ll keep you updated.</p>
        <p id="fail-message">
          Oops! Something went wrong while submitting the form. Please input the
          right email address!
        </p>
      </section>
    );
}