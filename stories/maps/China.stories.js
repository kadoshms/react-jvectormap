import { VectorMap } from "@react-jvectormap/core";
import { cnMill, cnMerc } from "@react-jvectormap/china";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/China",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: cnMill,
  fileName: "cnMill",
  country: "china",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: cnMerc,
  fileName: "cnMerc",
  country: "china",
};
