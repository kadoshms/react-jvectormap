import { VectorMap } from "@react-jvectormap/core";
import { oceaniaMerc, oceaniaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Oceania",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: oceaniaMerc,
  fileName: "oceaniaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: oceaniaMill,
  fileName: "oceaniaMill",
};
