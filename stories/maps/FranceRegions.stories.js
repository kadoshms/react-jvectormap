import { VectorMap } from "@react-jvectormap/core";
  import { frRegionsMerc, frRegionsMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/FranceRegions",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: frRegionsMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: frRegionsMill,
  };

  