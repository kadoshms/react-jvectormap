import React, { FC, Ref, useEffect, useLayoutEffect, useRef } from "react";
import $ from "jquery";
import { IVectorMapProps, MapObject } from "../../types";
import { MapContainer } from "../MapContainer";

export const VectorMap: FC<IVectorMapProps> = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = useRef<JQuery | null>(null);
  useLayoutEffect(() => {
    const mapContainer = containerRef.current;
    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }
    const { name, content } = map;
    $.fn.vectorMap("addMap", name, content);
    if (mapContainer) {
      $(mapContainer).vectorMap({
        map: name,
        series,
        ...props,
      });
      if (map && mapRef?.current === null) {
        mapRef.current = $(mapContainer).vectorMap(
          "get",
          "mapObject",
        ) as unknown as MapObject;
      }
    }
  }, [map, mapRef, props, series]);

  useEffect(() => {
    const mapContainer = containerRef.current;
    if (series && mapContainer) {
      const map = $(mapContainer).vectorMap("get", "mapObject");
      const { markers = [], regions = [] } = series;
      regions.forEach(({ values }, index) => {
        if (values && map.series?.regions) {
          map.series?.regions[index]?.clearAndSet(values);
        }
      });
      markers.forEach(({ values }, index) => {
        if (values && map.series?.markers) {
          map.series?.markers[index]?.clearAndSet(values);
        }
      });
    }
  }, [series]);

  return (
    <MapContainer
      className={className}
      style={style}
      containerRef={containerRef as Ref<HTMLDivElement>}
    />
  );
};
