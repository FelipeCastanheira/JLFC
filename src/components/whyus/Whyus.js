import React from "react";
import WhyContainer from "./Whyus.styles";

function Whyus() {
  return (
    <WhyContainer>
      <h2>Why Us?</h2>

      <div className="main">
        <div className="card">
          <h3>Responsive Websites</h3>
          <p>
            At our company, we take great pride in developing websites that
            prioritize state-of-the-art technology. Our projects are designed
            with a focus on responsive technology, enabling us to create
            tailored versions for every device, be it mobile, tablet, or
            desktop. By harnessing the power of cutting-edge technology, we
            ensure that your website remains accessible, visually captivating,
            and flawlessly functional across all platforms.
          </p>
        </div>

        <div className="card">
          <h3>Websites 100% Customized</h3>
          <p>
            We craft websites that embody the essence and character of your
            company in a truly distinctive manner, tailored to your brand. Our
            team is dedicated to comprehending and communicating with your
            target audience. We ensure that every element of your website is
            thoughtfully designed, creating a compelling user experience that
            aligns perfectly with your brand identity.
          </p>
        </div>

        <div className="card">
          <h3>Google Optimized</h3>
          <p>
            During our Website Creation process, we meticulously adhere to the
            highest standards of Search Engine Optimization (SEO), ensuring that
            your website achieves great positions on Google. By leveraging our
            expertise, your website will effortlessly ascend to prominence,
            attracting maximum visibility and driving unparalleled success for
            your online presence.
          </p>
        </div>

        <div className="card">
          <h3>E-commerce Functionality</h3>
          <p>
            With our advanced technology, you can confidently sell your
            products, benefiting from top-notch security measures that ensure
            the utmost protection. We meticulously design and customize your
            platform, integrating the finest tools available in the market. By
            doing so, we empower your business to leverage the best resources,
            maximizing your potential for exceptional sales results. 
          </p>
        </div>
      </div>
    </WhyContainer>
  );
}

export default Whyus;
