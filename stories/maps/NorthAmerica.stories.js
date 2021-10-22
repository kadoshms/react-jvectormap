import { VectorMap } from "@react-jvectormap/core";
import { northAmericaMerc, northAmericaMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/NorthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: northAmericaMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: northAmericaMill,
};
