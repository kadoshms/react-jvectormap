import { esMill } from "@react-jvectormap/maps";
import {
  VectorMapBuilder,
  SeriesBuilder,
  AttributeSeriesBuilder,
} from "@react-jvectormap/core";
import { MapContainer } from "../components/MapContainer/MapContainer";
import React, { useLayoutEffect, useRef } from "react";
import { VectorMap } from "@react-jvectormap/core";

const palette = ["#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3", "#A6D854"];

export const RandomColorsTemplate = (args) => {
  const ref = useRef(null);
  const generateColors = () => {
    const { regions } = ref.current;
    return Object.keys(regions).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: palette[Math.floor(Math.random() * palette.length)],
      }),
      {},
    );
  };
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.series.regions[0].setValues(generateColors());
    }
  }, []);
  return (
    <MapContainer>
      <button
        onClick={() => {
          ref.current.series.regions[0].setValues(generateColors());
        }}
      >
        SET COLORS
      </button>
      <VectorMap mapRef={ref} {...args} />
    </MapContainer>
  );
};

const electionsSeries = new AttributeSeriesBuilder("fill").build();

const series = new SeriesBuilder().addRegionsSeries(electionsSeries).build();

const map = new VectorMapBuilder(esMill).setSeries(series).build();
export default map;
