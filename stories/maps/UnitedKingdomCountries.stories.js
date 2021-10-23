import { VectorMap } from "@react-jvectormap/core";
import { ukCountriesMerc, ukCountriesMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/UnitedKingdomCountries",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ukCountriesMerc,
  fileName: "ukCountriesMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ukCountriesMill,
  fileName: "ukCountriesMill",
};
