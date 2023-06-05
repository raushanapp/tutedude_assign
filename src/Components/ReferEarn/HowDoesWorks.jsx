import styles from "./HowDoesWorks.module.css"
import inviteFriend from "../../Assest/invite_friends.png";
import rupee from "../../Assest/rupee.png";
import wallet from "../../Assest/wallet.png"
import purchases from "../../Assest/purchase_course.png"
import discounts from "../../Assest/discount_coupon.png";
export const HowDoesWorks = () => {
    

    return (
      <>
        <h1 className={styles.headerTitle}>How does it work ?</h1>
        <div className={styles.container}>
          <div className={styles.referFriends}>
            <div className={styles.insideFriendBox}>
              <button className={styles.inviteBtn}>
                <img
                  className={styles.inviteImage}
                  src={inviteFriend}
                  alt="invite friend"
                />
              </button>
              <div className={styles.textInvite}>
                <h1 className={styles.inviteBold}>Invite your Friends</h1>
                <p className={styles.ptags}>
                  Share the link tutedude.com with your friends
                </p>
              </div>
            </div>
            <div className={styles.insideFriendBox}>
              <button className={styles.inviteBtn}>
                <img className={styles.inviteImage} src={rupee} alt="rupee" />
              </button>
              <div className={styles.textInvite}>
                <h1 className={styles.getReferral}>
                  You get ₹ 200 as referral money
                </h1>
                <p className={styles.onTotal}>
                  {" "}
                  On total purchase the friend makes, into your wallet
                </p>
              </div>
            </div>
            <div className={styles.insideFriendBox}>
              <button className={styles.inviteBtn}>
                <img className={styles.inviteImage} src={wallet} alt="wallet" />
              </button>
              <div className={styles.textInvite}>
                <h1 className={styles.walletBold}>
                  Transfer money from wallet
                </h1>
                <p className={styles.walletNormal}>
                  When the wallet balance reaches ₹200 or more, you can withdraw
                  it
                </p>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div className={styles.purchasesCourse}>
            <div className={styles.purchaseContainer}>
              <button className={styles.purchasesBtn}>
                <img
                  className={styles.purchasesImage}
                  src={purchases}
                  alt="purchases"
                />
              </button>
              <div className={styles.friendPurchases}>
                <h1 className={styles.friendBold}>
                  Friend purchases any course
                </h1>
                <p className={styles.friendNormal}>
                  Using your REFERRAL CODE in the payments page
                </p>
              </div>
            </div>
            <div className={styles.purchaseContainer}>
              <button className={styles.purchasesBtn}>
                <img
                  className={styles.purchasesImage}
                  src={discounts}
                  alt="discount"
                />
              </button>
              <div className={styles.friendPurchases}>
                <h1 className={styles.discountBold}>
                  Your Friend gets ₹ 200 Off
                </h1>
                <p className={styles.discountNormal}>
                  On his overall fee on successful purchase using your referral
                  cod
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}