/* eslint-disable react/jsx-key */
import QRSticker from "../../pages/images/qr_code.svg";
import BoostcampStar from "../../pages/images/logo.svg";
import styles from "./qrcode.module.css";

export default function QRCode() {
  return (
    <>
      <div className={styles.heading}>
        <img
          className={styles.boostcamp_star}
          src={BoostcampStar.src}
          alt="app logo"
        />
        <h1 className={styles.shine}>BOOSTCAMP</h1>
      </div>
      <div className={styles.tagline}>
        <h2 className={styles.slogan}>
          Random tasks.<br></br> Any time of day.
        </h2>
      </div>
      <div className={styles.qr_sticker}>
        <img src={QRSticker.src} alt="QR Code" />
      </div>
    </>
  );
}
