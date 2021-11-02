import { VectorMap } from "@react-jvectormap/core";
import { itRegionsMill, itRegionsMerc, README } from "@react-jvectormap/maps";
import {
  itRegionsMill,
  itRegionsMerc,
  README,
} from "@react-jvectormap/italyregions";
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
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: itRegionsMerc,
  fileName: "itRegionsMerc",
};
