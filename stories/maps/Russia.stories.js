import { VectorMap } from "@react-jvectormap/core";
import { ruMill, ruMerc } from "@react-jvectormap/russia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Russia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ruMill,
  fileName: "ruMill",
  country: "russia",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ruMerc,
  fileName: "ruMerc",
  country: "russia",
};
