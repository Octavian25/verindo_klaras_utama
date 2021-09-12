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
        price="Rp. 150.500.000"
      />
      <div id="dtr-main-content">
        <section
          id="features"
          className="dtr-section dtr-box-layout dtr-py-100"
        >
          <div className="dtr-section-heading-wrapper">
            <h2>Kami Akan Bantu Segalanya</h2>
            <p>
              Sebagai Perusahaan Developer yang sangat mengutamakan kualitas
              layanan, kami akan membantu anda untuk mendapatkan rumah impian
              yang anda inginkan
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
              <h4>Pengajuan Rumah</h4>
              <p>Kami akan bantu anda dalam proses pengajuan rumah</p>
            </div>

            <div className="col-12 col-md-4 dtr-feature dtr-feature-top">
              <div className="dtr-feature-img">
                <img
                  src="http://tanshcreative.com/reales-lp-preview/assets/images/features-img2.png"
                  alt="Logo-2"
                />
              </div>
              <h4>Komunikasi</h4>
              <p>Kami siap melayani anda dengan sigap dan tanggap</p>
            </div>

            <div className="col-12 col-md-4 dtr-feature dtr-feature-top">
              <div className="dtr-feature-img">
                <img
                  src="http://tanshcreative.com/reales-lp-preview/assets/images/features-img3.png"
                  alt="Logo-3"
                />
              </div>
              <h4>Persyaratan</h4>
              <p>
                Kami akan bantu untuk mengorganisis dokumen persyaratan anda ,
                cukup siapkan dokumen yang diminta
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
