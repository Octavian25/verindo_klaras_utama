import React, { useState } from "react";
import emailjs from "emailjs-com";

const BodyEmail = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [project, setProject] = useState("");
  const [mulaiDari, setMulaiDari] = useState("-");
  const [sampaiDengan, setSampaiDengan] = useState("-");
  const [whatsapp, setwhatsapp] = useState("");

  const sendEmail = () => {
    emailjs.send("service_ls6u68s", "template_r4mdpql", {
      nama: nama,
      alamat: alamat,
      project: project,
      mulai_dari: mulaiDari,
      sampai_dengan: sampaiDengan,
      whatsapp: whatsapp.substr(-1),
    });
  };
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
                        <input
                          name="name"
                          type="text"
                          placeholder="Octavian"
                          onChange={(e) => setNama(e.target.value)}
                          onBlur={(e) => setNama(e.target.value)}
                        />
                      </p>
                    </div>
                    <div className="dtr-form-column">
                      <p className="dtr-form-field">
                        <span className="dtr-form-subtext">Alamat</span>
                        <input
                          name="alamat"
                          className="required"
                          type="text"
                          placeholder="bandung"
                          onChange={(e) => setAlamat(e.target.value)}
                          onBlur={(e) => setAlamat(e.target.value)}
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
                          onChange={(e) => setwhatsapp(e.target.value)}
                          onBlur={(e) => setwhatsapp(e.target.value)}
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
                    <select
                      name="subject"
                      className="required"
                      onChange={(e) => setProject(e.target.value)}
                      onBlur={(e) => setProject(e.target.value)}
                    >
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
                          onChange={(e) => setMulaiDari(e.target.value)}
                          onBlur={(e) => setMulaiDari(e.target.value)}
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
                          onChange={(e) => setSampaiDengan(e.target.value)}
                          onBlur={(e) => setSampaiDengan(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <p className="text-center dtr-mb-0">
                    <button
                      className="dtr-btn dtr-btn-right-icon btn-dark-blue mt-2"
                      type="submit"
                      onClick={sendEmail}
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

            <div className="spacer-100 "></div>
            <p>
              Alamat Kantor Verindo <br></br>
              Ruko Puri Dago, Jl. Terusan Jakarta No.308, Sukamiskin, <br></br>{" "}
              Kec. Antapani, Kota Bandung,<br></br> Jawa Barat
              <br></br>082166897755
            </p>
            <p className="text-size-l text-center color-green text-shadow-green">
              verindo.sales@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyEmail;
