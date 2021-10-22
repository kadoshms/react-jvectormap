import { VectorMap } from "@react-jvectormap/core";
import { itRegionsMerc, itRegionsMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/ItalyRegions",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: itRegionsMerc,
  fileName: "itRegionsMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: itRegionsMill,
  fileName: "itRegionsMill",
};
