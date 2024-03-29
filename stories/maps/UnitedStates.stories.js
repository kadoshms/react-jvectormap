import { VectorMap } from "@react-jvectormap/core";
import { useMerc, usMill, usLcc, usAea } from "@react-jvectormap/unitedstates";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/UnitedStates",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usMill,
  fileName: "usMill",
  country: "unitedstates",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: useMerc,
  fileName: "useMerc",
  country: "unitedstates",
};

export const Albers = MapTemplate.bind({});
Albers.args = {
  map: usAea,
  fileName: "usAea",
  country: "unitedstates",
};

export const Lambert = MapTemplate.bind({});
Lambert.args = {
  map: usLcc,
  fileName: "usLcc",
  country: "unitedstates",
};
