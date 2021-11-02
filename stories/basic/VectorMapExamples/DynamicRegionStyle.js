import { worldMill } from "@react-jvectormap/world";
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
