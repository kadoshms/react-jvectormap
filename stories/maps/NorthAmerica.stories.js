import { VectorMap } from "@react-jvectormap/core";
import { northAmericaMill, northAmericaMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NorthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: northAmericaMill,
  fileName: "northAmericaMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: northAmericaMerc,
  fileName: "northAmericaMerc",
};
