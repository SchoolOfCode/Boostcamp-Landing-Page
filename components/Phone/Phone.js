import PhoneImage from "../../pages/images/phone_outline.svg";
import WhiteBackground from "../../pages/images/phone_background_white.svg";
import TaskScreenStaticOrange from "../../pages/images/task_screen_orange.svg"
import TaskScreenStaticAqua from "../../pages/images/task_screen_aqua.svg"
import css from "./phone.module.css";

export default function Phone({phoneDisplay}) {
return (
    <div className={css.container}>
    <img className={css.phoneOuter} src={PhoneImage.src} alt=""></img>
    <img className={css.phoneInner} src={phoneDisplay ? TaskScreenStaticOrange.src : TaskScreenStaticAqua.src} alt=""></img>
    <img className={css.phoneBackground} src={WhiteBackground.src} alt=""></img>
    </div>
)
}