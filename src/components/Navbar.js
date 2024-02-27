import { Link, Outlet } from "react-router-dom";
import Style from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <Link className={Style.link} to="/">
          <h2 className={Style.heading}>CONTACT LIST</h2>
        </Link>
      </nav>

      <Outlet />
    </>
  );
}
