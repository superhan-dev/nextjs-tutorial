"use client";

import { ReactNode } from "react";
import styles from "./styles.module.css";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
