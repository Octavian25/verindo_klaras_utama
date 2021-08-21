import imageHome from "../images/image-home.png";
const BodyFeature = () => {
  return (
    <>
      <section id="cta" className="dtr-section dtr-box-layout">
        <div className="dtr-box-wrapper-round dtr-bg-shapes-type-2 dtr-box-padding bg-white">
          <div className="row">
            <div className="col-12 col-md-4 dtr-cta-box">
              <span className="dtr-cta-img">
                <img src={imageHome} alt="Logo-1" />
              </span>
              <div className="dtr-cta-content">
                <div className="dtr-cta-content-left">
                  <h4>Want to sell a home in the US?</h4>
                  <p>Get in touch with our broker!</p>
                </div>
                <div className="dtr-cta-content-right">
                  <a href="/#" className="dtr-btn btn-blue">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 dtr-cta-box offset-md-2 small-device-space">
              <span className="dtr-cta-img">
                <img src={imageHome} alt="Logo-2" />
              </span>
              <div className="dtr-cta-content">
                <div className="dtr-cta-content-left">
                  <h4>Want to buy a home in the UK?</h4>
                  <p>Call the broker for a quote!</p>
                </div>
                <div className="dtr-cta-content-right">
                  <a href="/#" className="dtr-btn btn-blue">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyFeature;
