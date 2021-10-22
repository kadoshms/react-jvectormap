import { VectorMap } from "@react-jvectormap/core";
  import { itRegionsMerc, itRegionsMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/ItalyRegions",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: itRegionsMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: itRegionsMill,
  };

  