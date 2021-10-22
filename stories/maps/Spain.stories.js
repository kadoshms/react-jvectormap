import { VectorMap } from "@react-jvectormap/core";
import { esMerc, esMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Spain",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: esMerc,
  fileName: "esMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: esMill,
  fileName: "esMill",
};
