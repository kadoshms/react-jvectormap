import React, { FC, Ref, useEffect, useRef } from "react";
import $ from "jquery";
import { IVectorMapProps } from "./types";

export const VectorMap: FC<IVectorMapProps> = ({ name, content, ...props }) => {
  const containerRef = useRef<JQuery | null>(null);
  const mapRef = useRef<JQuery | null>(null);

  console.log(props);

  useEffect(() => {
    $.fn.vectorMap("addMap", name, content);
    if (containerRef.current) {
      containerRef.current = $(containerRef.current).vectorMap({
        map: name,
        ...props,
      });
      mapRef.current = $(containerRef.current).vectorMap("get", "mapObject");
    }
  }, [content, name, props]);

  return (
    <div
      style={{ width: 500, height: 500 }}
      ref={containerRef as Ref<HTMLDivElement>}
    />
  );
};
