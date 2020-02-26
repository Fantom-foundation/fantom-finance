import React from "react";
import CountUp  from 'react-countup';

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">

        <div className="grid">
          <div className="left-column">
            <h3>Trade, borrow, and earn</h3>
            <h4>For everyone</h4>
          </div>
          <div className="right-column">
            <p>Fantom finance is a new platform that simplifies trading, lending, and borrowing of synthetic assets.<br /> 
              Access your wallet, deposit tokens, and start earning right away.<br />
              Powered by Fantom, DeFi has never been faster and easier.</p>
          </div>
        </div>
        <div className="countdown">
          <div className="counter">
            Tradable assets
            <CountUp
              start={0}
              end={176}
              duration={2}
              separator=" "
            >
            </CountUp>
          </div>
          <div className="counter">
            APR
            <CountUp
              start={0}
              end={8}
              duration={2}
              suffix="%"
            >
            </CountUp>
          </div>
          <div className="counter">
            Total collateralization
            <CountUp
              start={0}
              end={7459414}
              duration={2}
              separator=","
              prefix="$"
            >
            </CountUp>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SecondSection;