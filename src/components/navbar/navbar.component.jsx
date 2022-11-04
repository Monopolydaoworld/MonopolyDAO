import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/MDAOLogo4.png";
import LogoDark from "../../assets/SecondaryLogo.png";
import Line from "../../assets/Line 4.png";
import Line2 from "../../assets/Line 5.png";
import Line3 from "../../assets/Line6.png";
import Homepage from "../homepage/homepage.component";
import "./navbar.styles.css";
import Button from "../button/button.component";
import Home1 from "../../assets/House1.png";
import Home2 from "../../assets/House2.png";
import LinkedinLogo from "../../assets/LinkedinLogo.png";
import axios from "axios";
import { HashLink as Link2 } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

export default function NavBar() {
  // State to manage NavBar
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successsMessage, setSuccessMessage] = useState("");
  // Function to manage toggle
  const handleToggle = () => {
    setOpen(!open);
    window.addEventListener("resize", function () {
      let x = window.innerWidth;
      if (x > 680) {
        setOpen(false);
      }
    });
  };

  const loginUrl = "https://monopoly-dao.herokuapp.com/api/authenticate";
  const emailUrl = "https://monopoly-dao.herokuapp.com/api/email-registrations";
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
    if (isLoading) {
      document.getElementById("input-btn").innerHTML = "Submitting...";
    }
    try {
      const resopnse = await axios.post(emailUrl, { email }, config);
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

  const switchMobile = () => {
    setOpen(false);
  };

  useEffect(() => {
    try {
      Login();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="pages">
      {/* First Page */}
      <div className={`firstpage ${open ? "active" : ""}`} id="homepage">
        <div className="navbar">
          {open ? (
            <Link to="/">
              <img src={LogoDark} alt="MonopolyDAO Logo" className="logo_img" />
            </Link>
          ) : (
            <Link to="/">
              <img src={Logo} alt="MonopolyDAO Logo" className="logo_img" />
            </Link>
          )}
          <div className={`nav-links ${open ? "active" : ""}`}>
            <li id="nav-link">
              <Link2 to="#about" smooth onClick={switchMobile}>
                About
              </Link2>
            </li>
            <li id="nav-link">
              <Link2 to="#team" smooth onClick={switchMobile}>
                Team
              </Link2>
            </li>
            <li id="nav-link">
              <a
                href="https://docs.google.com/document/d/1npXna7f3wiv9ievQnHJV5dkEplV3VYsOVFHVsTjaN40/edit"
                target="_blank"
                rel="noreferrer"
              >
                Litepaper
              </a>
            </li>
            <li id="nav-link">
              {open ? (
                <Link2 to="#enterapp" smooth>
                  <Button
                    body={"Enter App"}
                    Line={Line2}
                    id="active-btn"
                    onClick={switchMobile}
                  />
                </Link2>
              ) : (
                <Link2 to="#enterapp" smooth>
                  Enter App
                </Link2>
              )}
            </li>
            <li id="nav-link">
              <Link to="#">
                <img src={Line} alt="" />
              </Link>
            </li>
          </div>
          <div
            className={`hamburger ${open ? "active" : ""}`}
            id="hamburger"
            onClick={handleToggle}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </div>
        </div>
        <section>{open ? null : <Homepage />}</section>
      </div>
      {/* Second Page */}
      <div className={`secondpage ${open ? "active" : null}`} id="about">
        <div className="secondpage-header">
          <h1>Own a Property in minutes.</h1>
        </div>
        <div className="secondpage-content">
          <p className="secondpage-p">
            MonopolyDAO is a decentralized home ownership platform that fully
            leverages on DeFi infrastructure and real world assets to provide
            accessible home ownership.
            <Link2 to="#homepage" className="secondpage-a" smooth>
              Join the Community{" "}
              <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
            </Link2>
          </p>
          <img src={Home1} alt="Home" className="secondpage-img" />
        </div>
      </div>
      {/* Third Page */}
      <div className={`thirdpage ${open ? "active" : null}`}>
        <div className="thirdpage-header">
          <p id="thirdpage-header">WHAT WE DO</p>
          <h1 id="thidpage-header-hidden">What We Offer</h1>
          <div className="thirdpage-content">
            <img src={Home2} alt="Home" className="thirdpage-img" />
            <div className="thirdpage-content-2">
              <h1>What We Offer</h1>
              <p>
                <span>
                  Think of us as your decentralized real estate agent, handling
                  the end to end process of acquiring and managing real world
                  assets globally to provide dynamic yield and a safer store of
                  value while leveraging on blockchain Technology.
                </span>
                <span style={{ display: "block", marginTop: "1rem" }}>
                  MonopolyDAO offers a secondary marketplace for fractional
                  digitalized real estate, even for properties not initially
                  owned by the DAO. We aim to provide further liquidty to the
                  real estate market and be a reputable blockchain investment
                  with yield you can understand.
                </span>
              </p>
              <Link2 to="#about" className="secondpage-a" smooth>
                About US
                <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
              </Link2>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Page */}
      <div className={`fourthpage ${open ? "active" : null}`}>
        <div className="fourthpage-header">
          <p id="fourthpage-header">OUR PROMISE</p>
          <h1 id="fourthpage-header-h1">Why MonopolyDAO?</h1>
          <div className="fourthpage-content">
            <div className="fourthpage-content-1">
              <p className="forthpage-content-p1">Accessibility</p>
              <p className="fourthpage-content-p2">
                Fractionalizing real estate opens up the asset class to more
                participants globally.
              </p>
            </div>
            <div className="fourthpage-content-1" id="borders">
              <p className="forthpage-content-p1">Ownership</p>
              <p className="fourthpage-content-p2">
                Your journey to home ownership and earning rental income is made
                simple here.
              </p>
            </div>
            <div className="fourthpage-content-1" id="borders">
              <p className="forthpage-content-p1">Transparency</p>
              <p className="fourthpage-content-p2">
                The blockchain never lies and we utilize this technology in
                profit distributions and governance votes.
              </p>
            </div>
          </div>
          <a
            href="https://docs.google.com/document/d/1npXna7f3wiv9ievQnHJV5dkEplV3VYsOVFHVsTjaN40/edit"
            target="_blank"
            rel="noreferrer"
            className="secondpage-a"
          >
            Read More
            <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
          </a>
        </div>
      </div>
      {/* Fifth page */}
      {/* <div className={`fifthpage ${open ? "active" : null}`}>
        <div className="fifthpage-header">
          <h1 id="fifthpage-header-h1">$MDAO Token</h1>
          <p className="fifthpage-content-p2">
            MonopolyDAO is a decentralized protocol and is governed by the $MDAO
            token. This allows you make decisions on where properties are
            bought, when they’re sold and staking it provides dynamic earnings
            from the DAO’s profitable activities.
          </p>
        </div>
      </div> */}
      {/* Sixth Page */}
      <div className={`sixthpage ${open ? "active" : null}`} id="team">
        <div className="sixthpage-header">
          <h1 id="fifthpage-header-h1">Our People</h1>
          <div className="sixthpage-content">
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Temisan Gerrard</p>
              <p className="sixthpage-content-p2">CEO</p>
              <a
                href="https://www.linkedin.com/in/temisangerrard"
                target="_black"
              >
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Efosa John</p>
              <p className="sixthpage-content-p2">COO</p>
              <a href="https://www.linkedin.com/in/efosa-john" target="_black">
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </a>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Naro Omo-Osagie</p>
              <p className="sixthpage-content-p2">Head of Legal / Compliance</p>
              <a
                href="https://www.linkedin.com/in/osasenaro-omo-osagie-b2a967131"
                target="_black"
              >
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </a>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Justin Irabor</p>
              <p className="sixthpage-content-p2">CTO</p>
              <a
                href="https://www.linkedin.com/in/justinirabor"
                target="_black"
              >
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sevent Page */}
      <div className={`seventhpage ${open ? "active" : null}`} id="enterapp">
        <div className="seventhpage-header">
          <p id="seventhpage-header">FOLLOW OUR JOURNEY</p>
          <h1 id="seventhpage-header-h1">
            Sign up for our waitlist, get updates about our launch.
          </h1>
          <section className="seventh-section">
            <div className="seventh-form-input" id="seventh-form-input">
              <div id="seventh-form">
                {successsMessage.length > 0 ? (
                  <p id="success-message">{successsMessage}</p>
                ) : (
                  <div>
                    <input
                      placeholder="Email Address"
                      id="seventh-input-text"
                      name="email"
                      onChange={(e) => handleChange(e)}
                    />
                    <Button
                      body={"Join the Waitlist"}
                      Line={Line2}
                      seventh
                      className="seventh-btn"
                      isLoading={isLoading}
                      onClick={handleSubmit}
                      disabled={message.length > 0 && email.length < 1}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`footer ${open ? "active" : null}`}>
        <Link2 to="#homepage" smooth>
          <img src={LogoDark} alt="logo" className="footer-logo_img" />
        </Link2>
        <Link2 to="#about" smooth>
          <li className="footer-link">About</li>
        </Link2>
        <Link2 to="#team" smooth>
          <li className="footer-link">Team</li>
        </Link2>
        <a
          href="https://docs.google.com/document/d/1npXna7f3wiv9ievQnHJV5dkEplV3VYsOVFHVsTjaN40/edit"
          target="_blank"
          rel="noreferrer"
        >
          <li className="footer-link">Litepaper</li>
        </a>
      </div>
    </div>
  );
}
