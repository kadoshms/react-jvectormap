import { VectorMap } from "@react-jvectormap/core";
import { ruFdMill, ruFdMerc, README } from "@react-jvectormap/maps";
import {
  ruFdMill,
  ruFdMerc,
  README,
} from "@react-jvectormap/russiafederaldistricts";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/RussiaFederalDistricts",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ruFdMill,
  fileName: "ruFdMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ruFdMerc,
  fileName: "ruFdMerc",
};
