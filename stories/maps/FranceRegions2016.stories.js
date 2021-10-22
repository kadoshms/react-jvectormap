import { VectorMap } from "@react-jvectormap/core";
import { frRegions_2016Merc, frRegions_2016Mill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/FranceRegions2016",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frRegions_2016Merc,
  fileName: "frRegions_2016Merc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frRegions_2016Mill,
  fileName: "frRegions_2016Mill",
};
