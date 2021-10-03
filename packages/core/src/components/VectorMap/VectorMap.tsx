import React, {
  FC,
  MutableRefObject,
  Ref,
  useLayoutEffect,
  useRef,
} from "react";
import $ from "jquery";
import { IVectorMapProps } from "../../types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { throwError } from "../../utils";

export const VectorMap: FC<IVectorMapProps> = ({
  map,
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = useRef<JQuery | null>(null);
  useLayoutEffect(() => {
    const mapContainer = containerRef.current;
    if (!map) {
      throwError("no map was loaded!");
    }
    const { name, content } = map;
    $.fn.vectorMap("addMap", name, content);
    if (mapContainer) {
      $(mapContainer).vectorMap({
        map: name,
        ...props,
      });
      if (mapRef) {
        (mapRef as MutableRefObject<JQuery>).current = $(
          mapContainer,
        ).vectorMap("get", "mapObject");
      }
    }

    return () => {
      (mapRef as MutableRefObject<JQuery>)?.current.remove();
      if (mapContainer) {
        const mapObject = $(mapContainer).vectorMap("get", "mapObject");
        mapObject.remove();
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
