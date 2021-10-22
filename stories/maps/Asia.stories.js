import { VectorMap } from "@react-jvectormap/core";
import { asiaMerc, asiaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Asia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: asiaMerc,
  fileName: "asiaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: asiaMill,
  fileName: "asiaMill",
};
