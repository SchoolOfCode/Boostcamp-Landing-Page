import css from "./InfoCard.module.css";
import YogaSVG from "../../pages/images/yoga.svg";
import BasketballSVG from "../../pages/images/basketball.svg";

export default function InfoCard({ isYoga, heading, subHeading, paragraph }) {
  return (
    <div className={isYoga ? css.yogaCard : css.basketballCard}>
      <div className={css.svgImage}>
        <img src={isYoga ? YogaSVG.src : BasketballSVG.src}></img>
      </div>
      <div className={css.textContainer}>
        <p className={css.textHeading}>{heading}</p>
        <p className={css.textSubHeading}>{subHeading}</p>
        <p className={css.textParagraph}>{paragraph}</p>
      </div>
    </div>
  );
}
