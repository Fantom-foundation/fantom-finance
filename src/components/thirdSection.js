import React from "react";
import Fade from 'react-reveal/Fade';
const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="container">
        <div className="grid">
          <div className="left-column">
            <h2><span>meet</span> fTrade</h2>
          </div>
          <div className="right-column">
            <div id="third-section" className="text-scroll-section">
              <Fade big>
                <div className="heighlited-heading">
                  <h2>Secure on-chain trading</h2>
                  <p>Trade directly from your wallet. Secured by Fantom Proof-of-Stake network.</p>
                </div>
              </Fade>
              <Fade big delay={2000}>
              <div className="heighlited-heading">
                <h2>No slippage</h2>
                <p>Trades are executed immediately with no slippage.</p>
              </div>
              </Fade>
              <Fade big delay={4000}>
              <div className="heighlited-heading">
                <h2>Instant liquidity</h2>
                <p>Access to 176 tokens with high trading volume.</p>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ThirdSection;