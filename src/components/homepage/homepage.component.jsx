import React, { useState, useEffect } from "react";
import "./homepage.styles.css";
import Button from "../button/button.component";
import Line from "../../assets/Line 5.png";
import axios from "axios";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successsMessage, setSuccessMessage] = useState("");

  const loginUrl = "http://localhost:8080/api/authenticate";
  const emailUrl = "http://localhost:8080/api/email-registrations";
  const username = "admin";
  const password = "admin";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (validate(e.target.value)) {
      setEmail(e.target.value);
      setMessage("");
      return;
    }
    setEmail("");
    setMessage(
      "Oops! Something went wrong while submitting the form. Please input the right email address!"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(isLoading);
    if (isLoading) {
      document.getElementById("input-btn").innerHTML = "Submitting...";
    }
    try {
      const resopnse = await axios.post(emailUrl, { email }, config);
      console.log(resopnse);
      if (resopnse.status !== 201) {
        setMessage(
          "Oops! Something went wrong while submitting the form. Please input the right email address!"
        );
        return;
      }
      setSuccessMessage("You’re all set! We’ll keep you updated.");
      setIsLoading(false);
    } catch (error) {
      setMessage("Email already in use");
      console.log(error);
      setIsLoading(false);
    }
  };

  const validate = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const Login = async () => {
    const resopnse = await axios.post(
      loginUrl,
      JSON.stringify({
        username,
        password,
      }),
      config
    );
    const data = await resopnse.data;
    if (data.status === 401) {
      alert("Unauthorized client");
      return;
    }
    setToken(data.id_token);
    return;
  };

  useEffect(() => {
    try {
      Login();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        <div id="form">
          {successsMessage.length > 0 ? (
            <p id="success-message">{successsMessage}</p>
          ) : (
            <div>
              <input
                // type="email"
                placeholder="Email Address"
                id="input-text"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <Button
                body={"Join the Waitlist"}
                isLoading={isLoading}
                Line={Line}
                onClick={handleSubmit}
                disabled={message.length > 0 && email.length < 1}
              />
            </div>
          )}
        </div>
      </div>
      <p id="fail-message">{message}</p>
    </section>
  );
}
