import PhoneImage from "../../pages/images/phone_task_screen.svg";
import css from "./phone.module.css";

export default function Phone({phoneDisplay}) {
return (
    <img className={css.phone} src={PhoneImage.src} alt=""></img>
)
}