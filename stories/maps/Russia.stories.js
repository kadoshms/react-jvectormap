import { VectorMap } from "@react-jvectormap/core";
  import { ruMerc, ruMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Russia",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: ruMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: ruMill,
  };

  