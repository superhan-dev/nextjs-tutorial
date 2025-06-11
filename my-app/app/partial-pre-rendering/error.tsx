"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 오류를 로깅하는 서비스에 오류를 보낼 수 있습니다
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorCard}>
        <h2 className={styles.errorTitle}>문제가 발생했습니다</h2>
        <p className={styles.errorMessage}>
          {error.message || "예상치 못한 오류가 발생했습니다."}
        </p>
        <button className={styles.errorButton} onClick={() => reset()}>
          다시 시도
        </button>
      </div>
    </div>
  );
}
