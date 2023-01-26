import React from "react";
import NavigationBar from "./NavigationBar"; //import your navigation bar component
import "../css//Header.css";


function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" className="logo" />
        <h1 className="business-name">Business Name</h1>
      </div>
      <div className="spacer" />
      <NavigationBar />
      <div className="spacer" />
    </header>
  );
}

export default Header;