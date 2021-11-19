import React, { useState, useEffect, useCallback, useMemo } from "react";
import { worldMill } from "@react-jvectormap/world";
import { MapContainer } from "../../components/MapContainer/MapContainer";
import { VectorMap } from "@react-jvectormap/core";
import { gdpData } from "./data/gdpData";

const randomNumber = (min, max) => Math.random() * (max - min) + min;

const makeData = (min, max) =>
  Object.fromEntries(
    Object.entries(gdpData).map(([key]) => [key, randomNumber(min, max)]),
  );

const fetchGDPData = () =>
  new Promise((res) => setTimeout(() => res(makeData(0, 1000)), 100));

const makeSeriesRegion = (values) => ({
  values,
  scale: ["#C8EEFF", "#0071A4"],
  normalizeFunction: "polynomial",
});

export const FetchDataTemplate = (args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(makeData(0, 1000));

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const respData = await fetchGDPData();
    setData(respData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const series = useMemo(
    () => ({
      regions: [makeSeriesRegion(data)],
    }),
    [data],
  );

  return (
    <MapContainer>
      <VectorMap
        {...args}
        series={series}
        onRegionTipShow={(e, el, code) => {
          el.html(el.html() + " (GDP - " + gdpData[code] + ")");
        }}
      />
      <button
        style={{ marginTop: 10 }}
        onClick={() => fetchData()}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Reload"}
      </button>
    </MapContainer>
  );
};

export default {
  map: worldMill,
};
