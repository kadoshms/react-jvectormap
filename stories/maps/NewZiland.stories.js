import { VectorMap } from "@react-jvectormap/core";
  import { nzMerc, nzMill } from "@react-jvectormap/maps";
  import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

  export default {
    title: "maps/Map/NewZiland",
    component: VectorMap,
    argTypes: {},
  };
  
  export const Miller = VectorMapTemplate.bind({});
  Miller.args = {
    map: nzMerc,
  };

export const Mercator = VectorMapTemplate.bind({});
  Mercator.args = {
    map: nzMill,
  };

  