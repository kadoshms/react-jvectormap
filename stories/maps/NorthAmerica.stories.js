import { VectorMap } from "@react-jvectormap/core";
import { northAmericaMerc, northAmericaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NorthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: northAmericaMerc,
  fileName: "northAmericaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: northAmericaMill,
  fileName: "northAmericaMill",
};
