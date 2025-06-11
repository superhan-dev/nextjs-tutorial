"use client";

import { CardData } from "../../api/actions";
import styles from "./styles.module.css";

interface CardGridProps {
  cards: CardData[];
}

export const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.smallImageContainer}>
            {card.imageUrl ? (
              <img
                src={card.imageUrl}
                alt={card.title}
                className={styles.cardImage}
              />
            ) : (
              <div className={styles.placeholderImage}>
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            )}
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
