import klaras from "../images/klaras.jpg";

const BodyHeader = (props) => {
  return (
    <>
      <section
        id="home"
        className="dtr-section dtr-box-layout dtr-hero-section-top-padding"
      >
        <div className="dtr-box-wrapper-round dtr-bg-shapes-type-1 bg-white">
          <div className="row">
            <div
              className="col-12 col-md-6 dtr-box-full-img"
              style={{
                backgroundImage: "url(" + klaras + ")",
              }}
            ></div>

            <div className="col-12 col-md-6 dtr-py-100 dtr-sm-p-50 dtr-px-100">
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
              <a
                href="/#"
                className="dtr-btn dtr-btn-right-icon dtr-mt-30 dtr-mr-5 btn-dark-blue"
              >
                View Properties
                <span className="btn-span bg-blue color-white">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </a>
              <a
                href="/#"
                className="dtr-btn dtr-btn-right-icon dtr-mt-30 btn-blue"
              >
                Get In Touch
                <span className="btn-span bg-white color-blue">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </a>

              <div className="spacer-100"></div>
              <p className="tagline-style2 dtr-mb-0 color-dark">
                Price starts at
              </p>
              <p className="text-size-xxl color-green text-shadow-green">
                {props.price}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyHeader;
