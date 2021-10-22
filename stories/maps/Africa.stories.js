import { VectorMap } from "@react-jvectormap/core";
import { africaMerc, africaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Africa",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: africaMerc,
  fileName: "africaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: africaMill,
  fileName: "africaMill",
};
