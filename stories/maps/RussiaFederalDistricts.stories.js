import { VectorMap } from "@react-jvectormap/core";
  import { ruFdMerc, ruFdMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/RussiaFederalDistricts",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: ruFdMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: ruFdMill,
  };

  