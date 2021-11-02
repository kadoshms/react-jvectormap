import { VectorMap } from "@react-jvectormap/core";
import { worldMill, worldMerc, README } from "@react-jvectormap/maps";
import { worldMill, worldMerc, README } from "@react-jvectormap/world";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/World",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: worldMill,
  fileName: "worldMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: worldMerc,
  fileName: "worldMerc",
};
