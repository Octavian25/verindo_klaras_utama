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
      <section
        id="properties"
        className="dtr-section dtr-bg-shapes-type-3 dtr-py-100"
      >
        <div className="dtr-box-layout">
          <div className="dtr-section-heading-wrapper">
            <h2>Rumah Terbaik Khusus Untuk Anda</h2>
            <p>Kami sediakan rumah terbaik dikelasnya, hanya untuk anda...</p>
          </div>
          {forSales.map((data) => {
            return (
              <div
                className="row d-flex align-items-center dtr-mt-70"
                key={data?.id}
              >
                <div className="col-12 col-md-6">
                  <div className="dtr-label-wrapper">
                    <span
                      className={
                        data?.status === "FOR SALE"
                          ? "dtr-label dtr-label-green"
                          : "dtr-label dtr-label-yellow"
                      }
                    >
                      {data?.status}
                    </span>
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
                            className={
                              data?.status === "FOR SALE"
                                ? "dtr-box-sm dtr-mr-5 bg-medium-blue"
                                : "dtr-box-sm dtr-mr-5 bg-medium-yellow"
                            }
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
                      href={data?.video}
                    >
                      Take a Tour
                      <span className="btn-span bg-blue color-white">
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BodyForSales;
