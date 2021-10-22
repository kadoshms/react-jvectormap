import { VectorMap } from "@react-jvectormap/core";
import { caLcc, caMerc, caMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Canada",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: caLcc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: caMerc,
};

export const Lambert = VectorMapTemplate.bind({});
Lambert.args = {
  map: caMill,
};
