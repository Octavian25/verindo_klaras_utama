const BodyService = () => {
  return (
    <>
      <section
        id="services"
        className="dtr-section dtr-box-layout dtr-box-wrapper-round dtr-box-padding bg-white"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="dtr-section-heading-wrapper">
              <h2>Layanan Kami</h2>
              <p>Pelayanan yang cepat dan terintegrasi</p>
            </div>
          </div>

          <div className="col-12 col-md-3 dtr-feature dtr-feature-top dtr-feature-square">
            <div className="dtr-feature-img bg-medium-blue color-dark-blue">
              <i className="fa fa-building-o" aria-hidden="true"></i>
            </div>
            <h5>Penjualan Property</h5>
            <p>
              Banyak Property yang berhasil kami jual dalam waktu yang cepat
            </p>
          </div>
          <div className="col-12 col-md-3 dtr-feature dtr-feature-top dtr-feature-square">
            <div className="dtr-feature-img bg-medium-red color-dark-brown">
              <i className="fa fa-tags" aria-hidden="true"></i>
            </div>
            <h5>Strategi & Konsultasi</h5>
            <p>Diskusikan Stategi dan Konsultasikan rencanmu dengan kami</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-3 dtr-feature dtr-feature-top dtr-feature-square">
            <div className="dtr-feature-img bg-medium-green color-dark-green">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <h5>Pemanfaatan Lahan</h5>
            <p>
              Bekerja Sama untuk manfaatkan lahan menjadi ladang uang untuk anda
            </p>
          </div>

          <div className="col-12 col-md-3 dtr-feature dtr-feature-top dtr-feature-square">
            <div className="dtr-feature-img bg-medium-purple color-dark-purple">
              <i className="fa fa-road" aria-hidden="true"></i>
            </div>
            <h5>Portfolio Services</h5>
            <p>
              There are many variations of passages of lorem ipsum available.
            </p>
          </div>

          <div className="col-12 col-md-3 dtr-feature dtr-feature-top dtr-feature-square">
            <div className="dtr-feature-img bg-light-red color-dark-brown">
              <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
            <h5>Manajemen Fasilitas</h5>
            <p>
              There are many variations of passages of lorem ipsum available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyService;
