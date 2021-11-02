import { VectorMap } from "@react-jvectormap/core";
import { caMill, caMerc, caLcc } from "@react-jvectormap/canada";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Canada",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: caMill,
  fileName: "caMill",
  country: "canada",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: caMerc,
  fileName: "caMerc",
  country: "canada",
};

export const Lambert = MapTemplate.bind({});
Lambert.args = {
  map: caLcc,
  fileName: "caLcc",
  country: "canada",
};
