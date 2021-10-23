import { VectorMap } from "@react-jvectormap/core";
import { usAea, usLcc, usMill, useMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/UnitedStates",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usAea,
  fileName: "usAea",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: usLcc,
  fileName: "usLcc",
};

export const Albers = MapTemplate.bind({});
Albers.args = {
  map: usMill,
  fileName: "usMill",
};

export const Lambert = MapTemplate.bind({});
Lambert.args = {
  map: useMerc,
  fileName: "useMerc",
};
