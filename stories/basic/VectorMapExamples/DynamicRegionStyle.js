import { worldMill } from "@react-jvectormap/maps";
import { initial, hover } from "./data/USStatetsColors";

export default {
  map: worldMill,
  regionStyle: (code) => ({
    initial: {
      fill: initial[code],
    },
    hover: {
      fill: hover[code],
    },
  }),
};
