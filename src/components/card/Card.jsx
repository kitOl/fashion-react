import styles from "./Card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

const Card = ({ title, img }) => {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}>
        {}
      </a>
      <img className={styles.card__img} src={img} alt="Arrival 01" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <a href="#category">
            <img className={styles.card__icon} src={arrowImg} alt="Ahead!" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
