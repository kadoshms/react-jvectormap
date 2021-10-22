import { VectorMap } from "@react-jvectormap/core";
import { continentsMerc, continentsMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Continents",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: continentsMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: continentsMill,
};
