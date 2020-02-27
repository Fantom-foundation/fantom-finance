import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactFullpage from '@fullpage/react-fullpage';
import FirstSection from "../components/firstSection";
import SecondSection from "../components/secondSection";
import ThirdSection from "../components/thirdSection";
import FourthSection from "../components/fourthSection";
import FifthSeciton from "../components/fifthSection";
const { useState, useEffect } = React;
const anchors = ["01", "02", "03", "04", "05"];
const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);


  return (
    <Layout>
      <SEO title="Fantom Finance" />
      <main className="home-page">
        {isLoaded ? (
          <ReactFullpage
            //fullpage options
            // debug

            anchors={anchors}
            navigation={true}
            interlockedSlides={false}
            scrollOverflow={true}
            fitToSection={false}
            autoScrolling={true}
            scrollingSpeed={1000} /* Options here */
            scrollOverflow={true}
            scrollOverflowReset={true}
            scrollOverflowResetKey='YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk='
            render={() => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <FirstSection />
                  </div>
                  <div className="section">
                    <SecondSection />
                  </div>
                  <div className="section">
                    <ThirdSection />
                  </div>
                  <div className="section">
                    <FourthSection />
                  </div>
                  <div className="section">
                    <FifthSeciton />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        ) : (
          <div className="loader">
            <div className="spinner">
              
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}

export default IndexPage
