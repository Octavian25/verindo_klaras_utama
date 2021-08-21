import React from "react";
import BodyAbout from "../../component/bodyAbout";
import BodyFeature from "../../component/bodyFeature";
import BodyHeader from "../../component/bodyHeader";
import BodyForSales from "../../component/bodyForSales";
import BodyService from "../../component/bodyServices";
import BodyReviews from "../../component/bodyReviews";
import BodyEmail from "../../component/bodyEmail";

const Home = () => {
  return (
    <>
      <BodyHeader
        title="Klaras Cimanggung Hills"
        desc="Rumah Subsidi dengan pemandangan indah dan suasana yang menyenangkan"
        price="Rp. 150.000.000"
      />
      <div id="dtr-main-content">
        <section
          id="features"
          className="dtr-section dtr-box-layout dtr-py-100"
        >
          <div className="dtr-section-heading-wrapper">
            <h2>We handle everything</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt soluta nobis assumenda labore quod
              maxime.
            </p>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 dtr-feature dtr-feature-top">
              <div className="dtr-feature-img">
                <img
                  src="http://tanshcreative.com/reales-lp-preview/assets/images/features-img1.png"
                  alt="Logo-1"
                />
              </div>
              <h4>Home Appraisal</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquais
                ipsum ultrices.
              </p>
            </div>

            <div className="col-12 col-md-4 dtr-feature dtr-feature-top">
              <div className="dtr-feature-img">
                <img
                  src="http://tanshcreative.com/reales-lp-preview/assets/images/features-img2.png"
                  alt="Logo-2"
                />
              </div>
              <h4>Price Negotiation</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquais
                ipsum ultrices.
              </p>
            </div>

            <div className="col-12 col-md-4 dtr-feature dtr-feature-top">
              <div className="dtr-feature-img">
                <img
                  src="http://tanshcreative.com/reales-lp-preview/assets/images/features-img3.png"
                  alt="Logo-3"
                />
              </div>
              <h4>Paperwork Handling</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquais
                ipsum ultrices.
              </p>
            </div>
          </div>
        </section>
        <BodyFeature />
        <BodyAbout />
        <BodyForSales />
        <BodyService />
        <BodyReviews />
        <BodyEmail />
      </div>
    </>
  );
};

export default Home;
