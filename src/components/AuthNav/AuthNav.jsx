import { NavLink } from "react-router-dom";
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={styles.navLink} activeClassName={styles.activeNavLink}>Sign Up</NavLink>
      <NavLink to="/login" className={styles.navLink} activeClassName={styles.activeNavLink}>Login</NavLink>
    </div>
  );
};

export default AuthNav;
