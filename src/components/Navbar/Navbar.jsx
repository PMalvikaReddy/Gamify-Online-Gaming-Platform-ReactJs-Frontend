import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../pages/Store/Store.css";
// import { polybase, polybase_auth } from "@polybase/auth";
import client from "https://cdn.jsdelivr.net/npm/@polybase/client@0.3/dist/bundle.min.js";
import auth from "https://cdn.jsdelivr.net/npm/@polybase/client@0.3/dist/bundle.min.js";

function polysignIn() {
  console.log("working");
  // const client = new polybase.Polybase();
  // const auth = new polybase_auth.Auth();

  client.signer(async (data) => {
    console.log("sign", data);
    return {
      h: "eth-personal-sign",
      sig: await auth.ethPersonalSign(data),
    };
  });

  async function signIn() {
    const res = await auth.signIn();
    client.signer(async (data) => {
      console.log(data);
      return {
        h: "eth-personal-sign",
        sig: await auth.ethPersonalSign(data),
      };
    });
    console.log("signIn", res);
  }

  console.log("new button");
  return signIn();
}

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.gericht} alt="app logo"/> */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            HOME
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            to="/Store"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            STORE
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            to="/Community"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            COMMUNITY
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            to="/Library"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            LIBRARY
          </Link>
        </li>
      </ul>

      <div className="app__navbar-login">
        {/* <ul>
          <li>
            {" "}
            <img
              className="image"
              src={images.user}
              width="50px"
              height="50px"
              alt="app logo"
            />
          </li>
        </ul> */}
        <img src={images.dark_logo} className="logo" />
        <img src={images.empty} className="empty" />

        <img src={images.text_dark} className="name" />
        {/* <div className="app__navbar-username">
          <li >
            <img src={images.dark_logo} className="logo" />
            <img src={images.text_dark} className="name" />
            {/* <a href="#username">METAMASK</a> */}
            {/* <div>
              <script src="https://cdn.jsdelivr.net/npm/@polybase/client@0.3/dist/bundle.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/@polybase/auth@0.3/dist/bundle.min.js"></script>
              <button type="button" className="" onClick={polysignIn}>
                METAMASK
              </button>
            </div> 
          </li>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
