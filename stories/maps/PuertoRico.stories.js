import { VectorMap } from "@react-jvectormap/core";
import { puertoRico } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/PuertoRico",
  component: VectorMap,
  argTypes: {},
};

export const PuertoRicp = MapTemplate.bind({});
PuertoRicp.args = {
  map: puertoRico,
  fileName: "puertoRico",
};
