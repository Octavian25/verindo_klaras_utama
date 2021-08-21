import { useSelector } from "react-redux";
import { getTestimoni } from "../application/selectors/testimoni";
import klaras from "../images/klaras.jpg";

const BodyReviews = () => {
  const testimoniData = useSelector(getTestimoni);
  return (
    <>
      <section id="reviews" className="dtr-section dtr-box-layout">
        <div className="row dtr-mr-0">
          <div className="col-12 col-md-5 dtr-py-100">
            <h2 className="dtr-section-heading">Testimoni Warga</h2>

            <div className="dtr-slick-slider dtr-testimonial-slider">
              {testimoniData?.map((data) => {
                return (
                  <div className="dtr-testimonial" key={data?.id}>
                    <h4 className="dtr-testimonial-tagline">{data?.judul}</h4>
                    <div className="dtr-testimonial-content">
                      {data?.deskripsi}
                    </div>
                    <div className="dtr-client-info">
                      <div className="dtr-testimonial-user">
                        <img src={data?.gambar} alt="image1" />
                      </div>
                      <div className="dtr-testimonial-user-info">
                        <h6 className="dtr-client-name">{data?.nama}</h6>
                        <span className="dtr-client-job">
                          {data?.pekerjaan}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="col-12 col-md-6 offset-md-1 dtr-box-full-img dtr-mt-minus50 dtr-rounded-left-bottom"
            style={{
              backgroundImage: "url(" + klaras + ")",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default BodyReviews;
