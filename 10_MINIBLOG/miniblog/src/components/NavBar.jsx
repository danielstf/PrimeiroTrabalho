import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          mini <span>blog</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
