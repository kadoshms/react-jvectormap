import { VectorMap } from "@react-jvectormap/core";
import { ruMerc, ruMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Russia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ruMerc,
  fileName: "ruMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ruMill,
  fileName: "ruMill",
};
