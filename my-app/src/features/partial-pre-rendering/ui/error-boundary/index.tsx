"use client";

import React, { Component, ReactNode } from "react";
import styles from "./styles.module.css";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트합니다.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // 사용자 정의 폴백 UI 또는 기본 에러 메시지를 렌더링합니다.
      return (
        this.props.fallback || (
          <div className={styles.componentErrorContainer}>
            <div className={styles.componentErrorContent}>
              <h3>컴포넌트 로딩 중 오류가 발생했습니다.</h3>
              <p>{this.state.error?.message}</p>
              <button
                className={styles.retryButton}
                onClick={() => this.setState({ hasError: false, error: null })}
              >
                다시 시도
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
