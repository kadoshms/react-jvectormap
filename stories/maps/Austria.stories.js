import { VectorMap } from "@react-jvectormap/core";
import { atMill, atMerc } from "@react-jvectormap/austria";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Austria",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: atMill,
  fileName: "atMill",
  country: "austria",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: atMerc,
  fileName: "atMerc",
  country: "austria",
};
