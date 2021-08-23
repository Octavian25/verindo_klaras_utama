import logo from "../images/logo.png";
const Header = () => {
  return (
    <>
      <header id="dtr-header-global" className="fixed-top">
        <div className="d-flex align-items-center justify-content-between">
          <div className="dtr-header-left">
            <a className="logo-default dtr-scroll-link" href="#home">
              <img src={logo} alt="logo" />
            </a>
            <a className="logo-alt dtr-scroll-link" href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="dtr-header-right ml-auto">
            <div className="dtr-header-contact dtr-ml-50 dtr-mt-5">
              <p>
                <a href="/#">
                  <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                  (022) 522-222
                </a>
              </p>
            </div>
            <div className="main-navigation dtr-menu-light">
              <ul className="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll">
                <li>
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#properties">
                    Properties
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
