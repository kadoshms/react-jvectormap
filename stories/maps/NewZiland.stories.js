import { VectorMap } from "@react-jvectormap/core";
import { nzMill, nzMerc } from "@react-jvectormap/newziland";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NewZiland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: nzMill,
  fileName: "nzMill",
  country: "newziland",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: nzMerc,
  fileName: "nzMerc",
  country: "newziland",
};
