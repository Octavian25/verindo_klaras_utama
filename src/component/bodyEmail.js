const BodyEmail = () => {
  return (
    <>
      <section
        id="contact"
        className="dtr-section dtr-box-layout dtr-box-wrapper-round dtr-bg-shapes-type-5 dtr-box-padding bg-white"
      >
        <div className="row dtr-bg-shapes-type-4">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <div className="dtr-section-heading-wrapper">
              <h2>Saya Tertarik</h2>
              <p>
                Silahkan isi kolom dibawah ini dengan lengkap<br></br>
                nanti kami akan menghubungi sesuai jam yang diinginkan
              </p>
            </div>

            <div className="dtr-form dtr-form-styled">
              <form id="contactform">
                <fieldset>
                  <div className="dtr-form-row dtr-form-row-2col clearfix">
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Nama</span>
                        <input name="name" type="text" placeholder="Octavian" />
                      </p>
                    </div>
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Email</span>
                        <input
                          name="email"
                          className="required email"
                          type="text"
                          placeholder="octa@example.com"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="dtr-form-row dtr-form-row-2col clearfix">
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Nomor Whatsapp</span>
                        <input
                          name="name"
                          type="number"
                          placeholder="0859244321"
                          maxlength="13"
                        />
                      </p>
                    </div>
                    <div className="dtr-form-column d-none">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Email</span>
                        <input
                          name="email"
                          className="required email"
                          type="text"
                          placeholder="john@example.com"
                        />
                      </p>
                    </div>
                  </div>
                  <p className="dtr-form-field">
                    <select name="subject" className="required">
                      <option value="Klaras Cimanggung Hills">
                        Klaras Cimanggung Hills
                      </option>
                    </select>
                  </p>
                  <div>Saya Dapat Dihubungi : </div>
                  <div className="dtr-form-row dtr-form-row-2col clearfix">
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Mulai Dari</span>
                        <input
                          name="name"
                          type="text"
                          placeholder="9 pagi / 09:00"
                        />
                      </p>
                    </div>
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Sampai Dengan</span>
                        <input
                          name="mulai_dari"
                          className="required"
                          type="text"
                          placeholder="5 sore / 17:00"
                        />
                      </p>
                    </div>
                  </div>
                  <p className="text-center dtr-mb-0">
                    <button
                      className="dtr-btn dtr-btn-right-icon btn-dark-blue mt-2"
                      type="submit"
                    >
                      Send Message
                      <span className="btn-span bg-blue color-white">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      </span>
                    </button>
                  </p>
                  <div id="result"></div>
                </fieldset>
              </form>
            </div>

            <div className="spacer-100"></div>
            <p>
              Alamat Kantor Verindo <br></br>0815872823
            </p>
            <p className="tagline-style1 color-green text-shadow-green">
              verindo.sales@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyEmail;
