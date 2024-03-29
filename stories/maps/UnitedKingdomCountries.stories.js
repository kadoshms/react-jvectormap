import { VectorMap } from "@react-jvectormap/core";
import {
  ukCountriesMill,
  ukCountriesMerc,
} from "@react-jvectormap/unitedkingdomcountries";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/UnitedKingdomCountries",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ukCountriesMill,
  fileName: "ukCountriesMill",
  country: "unitedkingdomcountries",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ukCountriesMerc,
  fileName: "ukCountriesMerc",
  country: "unitedkingdomcountries",
};
