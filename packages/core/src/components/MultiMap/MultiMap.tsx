import React, { FC, Ref, useLayoutEffect, useRef } from "react";
import $ from "jquery";
import { IMultiMapProps } from "../../types";
import { MapContainer } from "../MapContainer";

export const MultiMap: FC<IMultiMapProps> = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = useRef<JQuery | null>(null);
  useLayoutEffect(() => {
    const mapContainer = containerRef.current;
    const { main, ...rest } = props;
    const {
      map: { name, content },
      ...restMain
    } = main;
    $.fn.vectorMap("addMap", name, content);
    if (mapContainer) {
      $(mapContainer).multiMap({
        main: {
          ...restMain,
          map: name,
        },
        ...rest,
      });
    }
  }, [mapRef, props]);

  return (
    <MapContainer
      style={style}
      className={className}
      containerRef={containerRef as Ref<HTMLDivElement>}
    />
  );
};
