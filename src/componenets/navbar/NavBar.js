import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">Food Donation Platform</div>
      <nav className="nav">
        <a href="/login" className="nav-link">
          Login
        </a>
        <a href="/signup" className="nav-link">
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
