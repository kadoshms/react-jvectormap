import { VectorMap } from "@react-jvectormap/core";
import {
  southAmericaMill,
  southAmericaMerc,
} from "@react-jvectormap/southamerica";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/SouthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: southAmericaMill,
  fileName: "southAmericaMill",
  country: "southamerica",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: southAmericaMerc,
  fileName: "southAmericaMerc",
  country: "southamerica",
};
