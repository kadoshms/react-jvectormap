import { VectorMap } from "@react-jvectormap/core";
import { ukCountriesMerc, ukCountriesMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/UnitedKingdomCountries",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: ukCountriesMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: ukCountriesMill,
};
