import React from "react";
import Fade from 'react-reveal/Fade';
const FourthSection = () => {
  return (
    <section className="fourth-section">
      <div className="container">

        <div className="grid">
          <div className="left-column">
            <h2><span>meet</span> fLend</h2>
          </div>
          <div className="right-column">
            <div className="text-scroll-section">
            <Fade big>
              <div className="heighlited-heading">
                <h2>Lend and earn interest</h2>
                <p>Add your tokens to the lending liquidity pool and start earning immediately at a verifiable and transparent APR.</p>
              </div>
              </Fade>
              <Fade big delay={2000}>
              <div className="heighlited-heading">
                <h2>Borrow</h2>
                <p>Borrow any token at a variable interest rate. No middle man, no hidden fees.</p>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FourthSection;