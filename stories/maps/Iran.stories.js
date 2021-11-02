import { VectorMap } from "@react-jvectormap/core";
import { iranMill, README } from "@react-jvectormap/maps";
import { iranMill, README } from "@react-jvectormap/iran";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Iran",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: iranMill,
  fileName: "iranMill",
};
