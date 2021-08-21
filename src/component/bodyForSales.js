import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../application/actions/ui";
import { forsale } from "../application/selectors/forsale";

const BodyForSales = () => {
  const dispatch = useDispatch();
  const forSales = useSelector(forsale);
  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <>
      {forSales.map((data) => {
        return (
          <section
            id="properties"
            key={data?.id}
            className="dtr-section dtr-bg-shapes-type-3 dtr-py-100"
          >
            <div className="dtr-box-layout">
              <div className="dtr-section-heading-wrapper">
                <h2>Our Featured Porperties For Sell</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt soluta nobis assumenda labore quod
                  maxime.
                </p>
              </div>

              <div className="row d-flex align-items-center dtr-mt-70">
                <div className="col-12 col-md-6">
                  <div className="dtr-label-wrapper">
                    <span className="dtr-label dtr-label-green">For Sale</span>
                    <img
                      src={data?.gambar}
                      alt="image1"
                      className="dtr-rounded-img"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className=" dtr-pl-40 dtr-sm-pl-0 small-device-space">
                    <p className="text-size-sm dtr-mb-10">
                      <i className="fa fa-map-pin mr-2" aria-hidden="true"></i>
                      {data?.alamat}
                    </p>
                    <h2 className="dtr-mb-10">{data?.nama}</h2>
                    <p className="tagline-style1 color-green text-shadow-green">
                      Rp. {data?.harga}
                    </p>

                    <div className="dtr-mt-30 dtr-mb-30">
                      {data?.spesifikasi.map((spek) => {
                        return (
                          <div
                            className="dtr-box-sm dtr-mr-5 bg-medium-blue"
                            key={spek?.id}
                          >
                            <i className={spek?.icon}></i>
                            <br></br>
                            <strong>{spek?.value}</strong>
                            <br></br>
                            {spek?.nama}
                          </div>
                        );
                      })}
                    </div>

                    <p className="dtr-mb-30">{data?.keterangan}</p>

                    <a
                      className="dtr-btn dtr-video-popup dtr-btn-right-icon dtr-mr-5 btn-dark-blue"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://www.youtube.com/watch?v=kuceVNBTJio"
                    >
                      Take a Tour
                      <span className="btn-span bg-blue color-white">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </span>
                    </a>

                    <div className="dtr-share">
                      <div className="dtr-btn dtr-btn-only-icon btn-blue">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <ul className="dtr-share-dropdown dtr-social dtr-share-list"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default BodyForSales;
