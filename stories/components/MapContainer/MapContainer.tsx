import React, { FC } from "react";
import styles from "./MapContainer.module.scss";

interface IMapContainerProps {
  description?: string;
}

export const MapContainer: FC<IMapContainerProps> = ({
  children,
  description,
}) => (
  <div className={styles.root}>
    <div>
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.map}>{children}</div>
    </div>
  </div>
);
