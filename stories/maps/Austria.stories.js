import { VectorMap } from "@react-jvectormap/core";
import { atMerc, atMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Austria",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: atMerc,
  fileName: "atMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: atMill,
  fileName: "atMill",
};
