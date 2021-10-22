import { VectorMap } from "@react-jvectormap/core";
import { dkMerc, dkMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Denmark",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: dkMerc,
  fileName: "dkMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: dkMill,
  fileName: "dkMill",
};
