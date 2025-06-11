import { Suspense } from "react";
import {
  fetchCards,
  fetchFeaturedCard,
} from "@/features/partial-pre-rendering/api";
import {
  Header,
  FeaturedCard,
  CardGrid,
  MainContainer,
  ContentSection,
} from "@/features/partial-pre-rendering/ui";
import { ErrorBoundary } from "@/features/partial-pre-rendering/ui/error-boundary";
import styles from "./styles.module.css";

// 카드 그리드에 대한 로딩 표시기
const CardGridSkeleton = () => (
  <div className={styles.cardGrid}>
    {Array(6)
      .fill(0)
      .map((_, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.smallImageContainer}>
            <div className={styles.placeholderImage}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.smallTextLine}></div>
          </div>
        </div>
      ))}
  </div>
);

// 피처드 카드에 대한 로딩 표시기
const FeaturedCardSkeleton = () => (
  <div className={styles.featuredCard}>
    <div className={styles.imageContainer}>
      <div className={styles.placeholderImage}>
        <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.textLine}></div>
      <div className={styles.textLine} style={{ width: "80%" }}></div>
      <div className={styles.textLine} style={{ width: "60%" }}></div>
    </div>
  </div>
);

// 카드 데이터를 가져오는 컴포넌트
const CardGridContainer = async () => {
  const cards = await fetchCards();
  return <CardGrid cards={cards} />;
};

// 피처드 카드 데이터를 가져오는 컴포넌트
const FeaturedCardContainer = async () => {
  const featuredCard = await fetchFeaturedCard();
  return <FeaturedCard card={featuredCard} />;
};

export default function PartialPreRenderingPage() {
  return (
    <MainContainer>
      <Header />
      <ContentSection>
        <ErrorBoundary>
          <Suspense fallback={<FeaturedCardSkeleton />}>
            <FeaturedCardContainer />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<CardGridSkeleton />}>
            <CardGridContainer />
          </Suspense>
        </ErrorBoundary>
      </ContentSection>
    </MainContainer>
  );
}
