import { VectorMap } from "@react-jvectormap/core";
import { krMill, krMerc, README } from "@react-jvectormap/maps";
import { krMill, krMerc, README } from "@react-jvectormap/southkorea";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/SouthKorea",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: krMill,
  fileName: "krMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: krMerc,
  fileName: "krMerc",
};
