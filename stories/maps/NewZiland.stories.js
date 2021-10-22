import { VectorMap } from "@react-jvectormap/core";
import { nzMerc, nzMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NewZiland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: nzMerc,
  fileName: "nzMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: nzMill,
  fileName: "nzMill",
};
