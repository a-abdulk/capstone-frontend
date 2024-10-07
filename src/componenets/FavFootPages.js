// not working
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const NavFootPage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: 73 }}>
        <Outlet />
      </div>
      <div style={{ marginBottom: 500 }}>{<Footer />} </div>
    </div>
  );
};

export default NavFootPage;
