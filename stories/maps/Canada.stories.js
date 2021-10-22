import { VectorMap } from "@react-jvectormap/core";
import { caLcc, caMerc, caMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Canada",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: caLcc,
  fileName: "caLcc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: caMerc,
  fileName: "caMerc",
};

export const Lambert = MapTemplate.bind({});
Lambert.args = {
  map: caMill,
  fileName: "caMill",
};
