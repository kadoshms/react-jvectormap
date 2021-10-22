import { VectorMap } from "@react-jvectormap/core";
  import { usIlChicagoMerc, usIlChicagoMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/Chicago",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: usIlChicagoMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: usIlChicagoMill,
  };

  