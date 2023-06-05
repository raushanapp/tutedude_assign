import { Breadcrumb } from "../BreadCrumb/BreadCrumb";
import { HowDoesWorks } from "./HowDoesWorks";
import styles from "./Referal.module.css";
import { Link } from "react-router-dom";
export const Referal = () => {
  return (
    <div className={styles.referalContainer}>
       <Breadcrumb/>
      <div className={styles.referEarn}>
        <div className={styles.refemoney}>
          <div className={styles.moneyDiv}>
            <div className={styles.walletMoney}>
              <p>Referral Earning</p>
              <h1>₹ 2,500</h1>
            </div>
            <div className={styles.walletMoney}>
              <p>Total Referrals</p>
              <h1>7</h1>
            </div>
            <div className={styles.walletMoney}>
              <p>Wallet Balance</p>
              <h1>₹ 5000</h1>
            </div>
          </div>
          <div className={styles.withdraw}>
            <button className={styles.buttonWithdraw}>Withdraw Balance</button>
          </div>
        </div>
        <div className={styles.referCode}>
          <p className={styles.codeName}>Your Referral Code</p>
          <div className={styles.alphabet}>
            <p>EDCH54</p>
          </div>
        </div>
      </div>
      {/* how does its works  */}
      <HowDoesWorks />
      <Link  className={styles.referFriend} to="/refer-friend" >Friends Who Enrolled</Link>
      <p className={styles.termCondition}>Terms & Conditions</p>
    </div>
  );
};
