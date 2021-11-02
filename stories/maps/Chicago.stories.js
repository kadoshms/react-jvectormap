import { VectorMap } from "@react-jvectormap/core";
import {
  usIlChicagoMill,
  usIlChicagoMerc,
  README,
} from "@react-jvectormap/maps";
import {
  usIlChicagoMill,
  usIlChicagoMerc,
  README,
} from "@react-jvectormap/chicago";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Chicago",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usIlChicagoMill,
  fileName: "usIlChicagoMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: usIlChicagoMerc,
  fileName: "usIlChicagoMerc",
};
