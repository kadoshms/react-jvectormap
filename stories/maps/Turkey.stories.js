import { VectorMap } from "@react-jvectormap/core";
import { trMill } from "@react-jvectormap/turkey";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Turkey",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: trMill,
  fileName: "trMill",
  country: "turkey",
};
