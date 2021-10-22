import { VectorMap } from "@react-jvectormap/core";
import { frRegions_2016Merc, frRegions_2016Mill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/FranceRegions2016",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: frRegions_2016Merc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: frRegions_2016Mill,
};
