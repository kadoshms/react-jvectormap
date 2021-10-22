import { VectorMap } from "@react-jvectormap/core";
import { usIlChicagoMerc, usIlChicagoMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Chicago",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usIlChicagoMerc,
  fileName: "usIlChicagoMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: usIlChicagoMill,
  fileName: "usIlChicagoMill",
};
