import React from "react";
import { useState } from "react";
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
import LinkedinLogo from "../../assets/LinkedinLogo.png"

export default function NavBar() {
  // State to manage NavBar
  const [open, setOpen] = useState(false);
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
  return (
    <div className="pages">
      {/* First Page */}
      <div className={`firstpage ${open ? "active" : ""}`}>
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
              <Link to="/about">About</Link>
            </li>
            <li id="nav-link">
              <Link to="/about">Team</Link>
            </li>
            <li id="nav-link">
              <Link to="/about">Litepaper</Link>
            </li>
            <li id="nav-link">
              {open ? (
                <Link to="/about">
                  <Button body={"Enter App"} Line={Line2} id="active-btn" />
                </Link>
              ) : (
                <Link to="/about">Enter App</Link>
              )}
            </li>
            <li id="nav-link">
              <Link to="/about">
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
      <div className={`secondpage ${open ? "active" : null}`}>
        <div className="secondpage-header">
          <h1>Own a Property in minutes.</h1>
        </div>
        <div className="secondpage-content">
          <p className="secondpage-p">
            MonopolyDAO is a decentralized home ownership platform that fully
            leverages on DeFi infrastructure and real world assets to provide
            accessible home ownership.
            <a href="#" className="secondpage-a">
              Join the Community{" "}
              <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
            </a>
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
              <a href="#" className="secondpage-a">
                About US{" "}
                <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
              </a>
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
                participants globally. We handle the heavy cost of initial
                purchase and legal fees, you only need to connect your wallet to
                make a purchase
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
          <a href="#" className="secondpage-a">
            Read More
            <img src={Line3} alt="" style={{ padding: "0 .5rem" }} />
          </a>
        </div>
      </div>
      {/* Fifth page */}
      <div className={`fifthpage ${open ? "active" : null}`}>
        <div className="fifthpage-header">
          <h1 id="fifthpage-header-h1">$MDAO Token</h1>
          <p className="fifthpage-content-p2">
            MonopolyDAO is a decentralized protocol and is governed by the $MDAO
            token. This allows you make decisions on where properties are
            bought, when they’re sold and staking it provides dynamic earnings
            from the DAO’s profitable activities.
          </p>
        </div>
      </div>
      {/* Sixth Page */}
      <div className={`sixthpage ${open ? "active" : null}`}>
        <div className="sixthpage-header">
          <h1 id="fifthpage-header-h1">Our People</h1>
          <div className="sixthpage-content">
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Temisan Agbajoh</p>
              <p className="sixthpage-content-p2">Co-Founder</p>
              <Link to="#">
                <img src={LinkedinLogo} alt="Linkedin" />
              </Link>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Efosa Osunhon</p>
              <p className="sixthpage-content-p2">Co-Founder</p>
              <Link to="#">
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </Link>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Naro Omo-Osagie</p>
              <p className="sixthpage-content-p2">Head of Legal/Compliance</p>
              <Link to="#">
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </Link>
            </div>
            <div className="sixthpage-content-1">
              <p className="sixthpage-content-p1">Helen Ifeonye</p>
              <p className="sixthpage-content-p2">Design</p>
              <Link to="#">
                <img src={LinkedinLogo} alt="Linkedin" id="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
