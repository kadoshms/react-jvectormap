import React, {
  FC,
  MutableRefObject,
  Ref,
  useLayoutEffect,
  useRef,
} from "react";
import $ from "jquery";
import { IVectorMapProps } from "../../types";
import { MapContainer } from "../MapContainer";

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
      console.error("[react-jvectormap]: no map was loaded!");
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
        const mapObject = $(mapContainer).vectorMap("remove");
        // mapObject.remove();
      }
    };
  }, [map, mapRef, props]);

  return (
    <MapContainer
      className={className}
      style={style}
      containerRef={containerRef as Ref<HTMLDivElement>}
    />
  );
};
