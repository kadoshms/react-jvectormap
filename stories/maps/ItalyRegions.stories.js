import { VectorMap } from "@react-jvectormap/core";
import { itRegionsMill, itRegionsMerc } from "@react-jvectormap/italyregions";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/ItalyRegions",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: itRegionsMill,
  fileName: "itRegionsMill",
  country: "italyregions",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: itRegionsMerc,
  fileName: "itRegionsMerc",
  country: "italyregions",
};
