// import { useParams, useSearchParams } from "react-router-dom";
import styles from "./ReferredFriend.module.css";

export const ReferredFriend = () => {
  return (
    <div className={styles.container}>
      <div className={styles.yourCode}>
        <div className={styles.referCode}>
          <p className={styles.textCode}>Your Referral Code</p>
          <button className={styles.btn}> EDCH54</button>
        </div>
        <div className={styles.walletBalance}>
          <p className={styles.textBalance}>Wallet Balance</p>
          <h2 className={styles.money}> ₹ 500</h2>
        </div>
      </div>
      <div className={styles.enrolledFriend}>
        <h2 className={styles.headerEnroll}>
          Friends who enrolled <span style={{ color: "#626262" }}>(3)</span>
        </h2>
        <div className={styles.friendName}>
          <div className={styles.DhirajSaxsena}>
            <div className={styles.title}>
              <h2 className={styles.referName}>Dhiraj Saxsena</h2>
              <p className={styles.date}>14 Sep, 2022</p>
            </div>
            <p className={styles.couresEnroll}>Courses Enrolled(6)</p>
            <div className={styles.skillsGrid}>
              <p>UI/UX</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
              <p>Python</p>
              <p>MERN</p>
              <p>JAVA</p>
            </div>
            <p className={styles.referAmount}>
              Referral Amount
              <span
                style={{
                  width: "55px",
                  height: "36px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "24px",
                  marginLeft: "5px",
                }}
              >
                ₹185
              </span>
            </p>
          </div>
          <div className={styles.SubhashMishra}>
            <div className={styles.title}>
              <h2 className={styles.referName}>Dhiraj Saxsena</h2>
              <p className={styles.date}>14 Sep, 2022</p>
            </div>
            <p className={styles.couresEnroll}>Courses Enrolled(23)</p>
            <div className={styles.skillsFlex}>
              <div className={styles.insideFlexBox1}>
                <p>UI/UX</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
              </div>
              <div className={styles.insideFlexBox2}>
                <p>Python</p>
                <p>MERN</p>
                <p>JAVA</p>
                <p>C++</p>
              </div>
            </div>
            <p className={styles.referAmount}>
              Referral Amount
              <span
                style={{
                  width: "55px",
                  height: "36px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "24px",
                  marginLeft: "5px",
                }}
              >
                ₹485
              </span>
            </p>
          </div>
          <div className={styles.PrafullKumar}>
            <div className={styles.halfBox}>
              <div className={styles.title}>
                <h2 className={styles.referName}>Prafull Kumar</h2>
              </div>
              <p className={styles.couresEnrollHalf}>Courses Enrolled(23)</p>
              <div className={styles.skillsFlex}>
                <div className={styles.insideFlexBox3}>
                  <p>UI/UX</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                </div>
                <div className={styles.insideFlexBox4}>
                  <p>Python</p>
                  <p>MERN</p>
                  <p>JAVA</p>
                  <p>C++</p>
                </div>
              </div>
              <p className={styles.referAmount1}>
                Referral Amount
                <span
                  style={{
                    width: "55px",
                    height: "36px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "24px",
                    marginLeft: "5px",
                  }}
                >
                  ₹485
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.term}>Term & Conditions</p>
    </div>
  );
};
