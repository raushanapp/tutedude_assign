// import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ReferredFriend.module.css";

export const ReferredFriend = () => {
    const navigate=useNavigate()
   
  return (
    <div className={styles.container}>
      <p
        className={styles.breadCrumb}
      >{`UI/UX > Refer & Earn > Friends Referred`}</p>
      <div className={styles.goback}>
              <img
                  onClick={()=>navigate("/")}
          className={styles.arrowImg}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAA6Ojr7+/urq6vS0tKurq7W1tbOzs7T09Ph4eH4+Pj19fWVlZUiIiLe3t5JSUm4uLhSUlKmpqaampro6Oh7e3sSEhIeHh5CQkJfX1+Pj49qampHR0e3t7dRUVFaWlrBwcEkHRGsAAACoUlEQVR4nO3dCVLDMAyF4RgoBdrSlbWs978khemwxh4nOKP66f9OoDeWooRMSdMAAAAAAAAAAAAAAAAImI7Xs83rlXUZg5lsL8OHl3PrUoYx3+d7N7MuZgij8N21dTnlnYWf1tYFlfY7YAhT65LKGv0JKDaKLQHDkXVRJf1t0Z0bobXYdoI7F9Z1FRMJqJOwtUV3blUuprGAYWFdWSGxFg3hxLq0MuIBb6xLKyPaoiGcWddWRPwEw6l1bUXIB0y0qHxAjctookU1Ap47blH5gBotKj+Dnveg/AnKB5RvUfmAGi2auJPRCMgM1k5+BtmDtaNFa+e5ReUDyreofEBatAq0aO1YE7WTn0FevtSOGayd5z0of4LyAeVbVD6gRovKv3zhVq128jMovyYSAdfN8YHpEzDRomFxdGju7rfzcid4qB46/aQjsSYOWIff5VxY19pT/s/HHq1L7Sn7lzlP1pX2tsxM+GxdaG+rvIAT6zr/YZKVcG5d5j/kXU4r3IWfRlkJa90V7/LOUH8Om5V1nb1lXkubpXWhveXuw2ZhXWlPz7kBq73WdPi3BvLPFlVG7PZ8WNsz/uP9rPs/bUicosbfaZpmHI+o8bc2B6/VXER00KiJiCqn6KBR5d9euJhF+ffALmZR/mU3S0MDS0MBs6jA9yyqnCI3cApYGgocNKrvpeEgooNGVYnIU78CB43qICJLQ4GDRuUGTgFP/Qq4gVPgoFFZGgqYRQW+Z5FTrEYiosb3nlI3cCLf7ErNosooxhtV5dt58Ygy3z+MN6rMNyyjlxuhhO2NqvQt2faId9ZFldUyi1rfdG47RZ1L6d7vX77JLPwvPxv12rqcIcwvdYdwb7LdZ3wZW5cymOn4ZLN5lVqEAAAAAAAAAAAAAAAAaW9PZSptxNPyHgAAAABJRU5ErkJggg"
          alt="arrow"
        />
        <p className={styles.textArrow}>go back</p>
      </div>
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
                <p className={styles.date1}>16 Sep, 2022</p>
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
