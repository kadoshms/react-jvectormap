import { VectorMap } from "@react-jvectormap/core";
import {
  frRegions_2016Mill,
  frRegions_2016Merc,
} from "@react-jvectormap/franceregions2016";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/FranceRegions2016",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frRegions_2016Mill,
  fileName: "frRegions_2016Mill",
  country: "franceregions2016",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frRegions_2016Merc,
  fileName: "frRegions_2016Merc",
  country: "franceregions2016",
};
