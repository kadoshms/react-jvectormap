import { VectorMap } from "@react-jvectormap/core";
import { ruFdMill, ruFdMerc } from "@react-jvectormap/russiafederaldistricts";
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
  country: "russiafederaldistricts",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ruFdMerc,
  fileName: "ruFdMerc",
  country: "russiafederaldistricts",
};
