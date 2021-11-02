import { VectorMap } from "@react-jvectormap/core";
import { brMill, README } from "@react-jvectormap/maps";
import { brMill, README } from "@react-jvectormap/brazil";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Brazil",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: brMill,
  fileName: "brMill",
};
