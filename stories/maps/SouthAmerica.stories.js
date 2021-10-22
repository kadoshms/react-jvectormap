import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMerc, southAmericaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/SouthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: southAmericaMerc,
  fileName: "southAmericaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: southAmericaMill,
  fileName: "southAmericaMill",
};
