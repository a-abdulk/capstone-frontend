import { Link } from "react-router-dom";
import "../styling/Cards.scss";
const Cards = (props) => {
  return (
    <div className="card id=carcard">
      <img
        src="/IMG/img/modelY.jpeg"
        className="card-img-top"
        alt="PLACEHOLDER IMG"
      />
      <div className="card-body justify-content-center">
        <h5 className="card-title">
          {/* {props.title} */}
          <p className="card-text">{props.text}</p>
          <Link to="/Terms" className="btn btn-primary btn-lg">
            Learn
          </Link>
        </h5>
      </div>
    </div>
