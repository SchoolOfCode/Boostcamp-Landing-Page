/* eslint-disable react/jsx-key */
import styles from "./instructioncard.module.css";

export default function InstructionCard({ text, isActive }) {
  return (
    <div className={styles.container}>
      <h2
        className={
          isActive ? styles.card_text_active : styles.card_text_inactive
        }
      >
        {text}
      </h2>
    </div>
  );
}
