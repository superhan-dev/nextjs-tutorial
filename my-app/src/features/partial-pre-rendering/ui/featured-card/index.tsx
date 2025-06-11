"use client";

import { CardData } from "../../api/actions";
import styles from "./styles.module.css";

interface FeaturedCardProps {
  card: CardData;
}

export const FeaturedCard = ({ card }: FeaturedCardProps) => {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.imageContainer}>
        {card.imageUrl ? (
          <img
            src={card.imageUrl}
            alt={card.title}
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{card.title}</h2>
        <p className={styles.description}>{card.description}</p>
      </div>
    </div>
  );
};
