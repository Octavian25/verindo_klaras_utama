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
          <button id="dtr-menu-button" className="dtr-hamburger" type="button">
            <span className="dtr-hamburger-lines-wrapper">
              <span className="dtr-hamburger-lines"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallDevices;
