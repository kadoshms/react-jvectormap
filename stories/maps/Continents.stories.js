import { VectorMap } from "@react-jvectormap/core";
import { continentsMerc, continentsMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Continents",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: continentsMerc,
  fileName: "continentsMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: continentsMill,
  fileName: "continentsMill",
};
