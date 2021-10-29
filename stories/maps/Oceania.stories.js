import { VectorMap } from "@react-jvectormap/core";
import { oceaniaMill, oceaniaMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Oceania",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: oceaniaMill,
  fileName: "oceaniaMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: oceaniaMerc,
  fileName: "oceaniaMerc",
};
