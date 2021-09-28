import React, { FC } from "react";
import styles from "./MapContainer.module.scss";

export const MapContainer: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
