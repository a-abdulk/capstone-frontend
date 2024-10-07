// Functional Component for Footer
import { Link } from "react-router-dom";
import "../styling/Footer.scss";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="page-footer fixed-bottom bg-dark bg-gradient bg-opacity-85"
    >
      <div className="container-xl">
        <div className="row">
          {/* <div className="col-3"> */}

          {/* <p>
              <Link to="/Terms" className=" col-3 noUnderline">
                Terms
              </Link>
            </p> */}

          {/* <p>
              <Link to="/EVBenefits" className="noUnderline">
                EV Benefits
              </Link>
            </p>

            <p>
              <Link to="/Charging" className="noUnderline">
                Charging
              </Link>
            </p> */}
          {/* </div> */}

          <div className="col-3">
            <Link to="/Terms" className="text-light col-3 noUnderline">
              <h5>Learn </h5>
            </Link>
          </div>

          <div className="col-3">
            <Link to="ShopEVs" className="text-light noUnderline">
              <h5>Shop EV's</h5>
            </Link>
          </div>

          <div className="col-3">
            <Link to="News" className="text-light noUnderline">
              <h5>News</h5>
            </Link>
          </div>
          <div className="col-3">
            <Link to="AboutUs" className="text-light noUnderline">
              <h5>About Us</h5>
            </Link>
          </div>
          <div className="text-center text-light">&copy;EVNow 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

