import React from "react";

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
              <div className="heighlited-heading">
                <h2>Secure on-chain trading</h2>
                <p>Trade directly from your wallet. Secured by Fantom Proof-of-Stake network.</p>
              </div>
              <div className="heighlited-heading">
                <h2>No slippage</h2>
                <p>Trades are executed immediately with no slippage.</p>
              </div>
              <div className="heighlited-heading">
                <h2>Instant liquidity</h2>
                <p>Access to 176 tokens with high trading volume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ThirdSection;