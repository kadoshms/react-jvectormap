import { VectorMap } from "@react-jvectormap/core";
import { idnMerc } from "@react-jvectormap/indonesia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Indonesia",
  component: VectorMap,
  argTypes: {},
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: idnMerc,
  fileName: "idnMerc",
  country: "indonesia",
};
