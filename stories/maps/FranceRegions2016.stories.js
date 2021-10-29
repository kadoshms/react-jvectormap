import { VectorMap } from "@react-jvectormap/core";
import { frRegions_2016Mill, frRegions_2016Merc } from "@react-jvectormap/maps";
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
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frRegions_2016Merc,
  fileName: "frRegions_2016Merc",
};
