import React, {
  FC,
  MutableRefObject,
  Ref,
  useLayoutEffect,
  useRef,
} from "react";
import $ from "jquery";
import { IVectorMapProps } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const VectorMap: FC<IVectorMapProps> = ({
  map,
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = useRef<JQuery | null>(null);
  console.log(props.markers);
  useLayoutEffect(() => {
    const { name, content } = map;
    $.fn.vectorMap("addMap", name, content);
    if (containerRef.current) {
      $(containerRef.current).vectorMap({
        map: name,
        ...props,
      });
      if (mapRef) {
        (mapRef as MutableRefObject<JQuery>).current = $(
          containerRef.current,
        ).vectorMap("get", "mapObject");
      }
    }

    return () => {
      if (mapRef) {
        (mapRef as MutableRefObject<JQuery>).current.remove();
      }
    };
  }, [map, mapRef, props]);

  return (
    <div
      style={style}
      className={classNames(styles.root, className)}
      ref={containerRef as Ref<HTMLDivElement>}
    />
  );
};
