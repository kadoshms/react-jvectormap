import { VectorMap } from "@react-jvectormap/core";
import { ptMerc, ptMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Portugal",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ptMerc,
  fileName: "ptMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ptMill,
  fileName: "ptMill",
};
