import klaras from "../images/klaras.jpg";

const BodyAbout = () => {
  return (
    <>
      <section id="about" className="dtr-section dtr-box-layout">
        <div className="row dtr-mr-0">
          <div className="col-12 col-md-6 dtr-py-100 dtr-pr-100">
            <div className="dtr-section-heading-wrapper dtr-mb-20">
              <h2>Buat Impianmu Menjadi Nyata</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt soluta nobis assumenda labore quod
                maxime.
              </p>
            </div>
            <p>
              There are many variations of passages of lorem ipsum available.
              Nam libero tempore cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime but the majority have
              suffered alteration in some form by injected humour or randomised
              words which don't look even slightly believable.{" "}
            </p>

            <div className="d-flex align-items-center dtr-mt-30">
              <div className="dtr-photo-chain">
                <span>
                  <img
                    src="http://tanshcreative.com/reales-lp-preview/assets/images/user-1.jpg"
                    alt="image1"
                  />
                </span>
                <span>
                  <img
                    src="http://tanshcreative.com/reales-lp-preview/assets/images/user-2.jpg"
                    alt="image2"
                  />
                </span>
                <span>
                  <img
                    src="http://tanshcreative.com/reales-lp-preview/assets/images/user-3.jpg"
                    alt="image3"
                  />
                </span>
                <span>
                  <img
                    src="http://tanshcreative.com/reales-lp-preview/assets/images/user-4.jpg"
                    alt="image4"
                  />
                </span>
                <span className="bg-blue color-white">45+</span>
              </div>
              <p className="text-size-sm dtr-ml-10">Reviews 4.8 out of 5</p>
            </div>

            <div className="row dtr-mt-30">
              <div className="col-12 col-md-6">
                <p className="tagline-style1 color-green text-shadow-green">
                  &#9733; 5
                </p>
                <p>Kepuasan</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="tagline-style1 color-green text-shadow-green">
                  &#9733; 5
                </p>
                <p>Pelayanan</p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 dtr-box-full-img dtr-mt-minus50 dtr-rounded-left-bottom"
            style={{
              backgroundImage: "url(" + klaras + ")",
            }}
          >
            {" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyAbout;
