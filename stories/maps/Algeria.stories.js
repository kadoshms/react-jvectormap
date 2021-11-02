import { VectorMap } from "@react-jvectormap/core";
import { dzMill, README } from "@react-jvectormap/maps";
import { dzMill, README } from "@react-jvectormap/algeria";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Algeria",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: dzMill,
  fileName: "dzMill",
};
