import logo from "../images/logo.png";


const SmallDevices = () => {
  return (
    <>
      <div className="dtr-responsive-header fixed-top">
        <div className="container">
          <a href="index.html">
            <img
              src={logo}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SmallDevices;
