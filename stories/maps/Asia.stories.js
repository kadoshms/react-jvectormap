import { VectorMap } from "@react-jvectormap/core";
import { asiaMerc, asiaMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Asia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: asiaMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: asiaMill,
};
