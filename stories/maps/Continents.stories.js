import { VectorMap } from "@react-jvectormap/core";
import { continentsMill, continentsMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Continents",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: continentsMill,
  fileName: "continentsMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: continentsMerc,
  fileName: "continentsMerc",
};
