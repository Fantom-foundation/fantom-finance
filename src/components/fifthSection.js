import React from "react";
import icon from "../images/right-icon.png"

const FirstSection = () => {
  return (
    <section className="fifth-section">
      <div className="container">
        <h2>Coming soon</h2>
        <span className="sub-heading">Sign up for exclusive early access</span>
        <div className="newsletter"><input placeholder="Enter your email address" type="text" />
        <button className="submit-btn" type="submit"><img src={icon} /></button></div>
      </div>
    </section>
  )
}
export default FirstSection;