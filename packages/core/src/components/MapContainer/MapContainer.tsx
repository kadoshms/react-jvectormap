import React, { CSSProperties, FC, Ref } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IMapContainerProps {
  style?: CSSProperties;
  className?: string;
  containerRef: Ref<HTMLDivElement>;
}

export const MapContainer: FC<IMapContainerProps> = ({
  containerRef,
  className,
  style,
}) => (
  <div
    style={style}
    className={classNames(styles.root, className)}
    ref={containerRef as Ref<HTMLDivElement>}
  />
);
