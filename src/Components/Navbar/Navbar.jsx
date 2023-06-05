import styles from "./Navbar.module.css";
import logo from "../../Assest/logo.png";
import profileLogo from "../../Assest/profile.png";
export const Navbar = () => {
    
    return (
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.rightDiv}>
          <p>My Assignment</p>
          <p>Chat with Mento</p>
          <div className={styles.profile}>
            <img
              src={profileLogo}
              className={styles.profile_log}
              alt="profile"
            />
            <select name="" id="">
              <option value="profile">ProfileName</option>
            </select>
          </div>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btnName}>ProfileName</button>
        </div>
      </div>
    );
}