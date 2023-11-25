import styles from "../css/navbar.module.css";
import dashtoonLogo from '../assets/dashtoon-logo.png';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftDiv}>
        <img className={styles.bars} src={dashtoonLogo} alt="Dashtoon Logo" width="40px" height="40px" />
      </div>
      <div className={styles.rightDiv}>
        Dashtoon
      </div>
    </div>
  );
};

export default Navbar;
