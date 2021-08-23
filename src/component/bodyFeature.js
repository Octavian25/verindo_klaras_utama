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
                  <h4>Ingin Membeli Rumah di Klaras ?</h4>
                  <p>Hubungi Marketing Klaras</p>
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
                  <h4>Ingin Membeli Rumah di Klaras 2 ?</h4>
                  <p>Hubungi Marketing Klaras 2</p>
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
