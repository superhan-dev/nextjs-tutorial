"use client";

import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ContentSectionProps {
  children: ReactNode;
}

export const ContentSection = ({ children }: ContentSectionProps) => {
  return <main className={styles.main}>{children}</main>;
};
