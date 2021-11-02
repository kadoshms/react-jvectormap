import { worldMill } from "@react-jvectormap/world";
import { gdpData } from "./data/gdpData";

export default {
  map: worldMill,
  onRegionTipShow: (e, el, code) => {
    el.html(el.html() + " (GDP - " + gdpData[code] + ")");
  },
  series: {
    regions: [
      {
        values: gdpData,
        scale: ["#C8EEFF", "#0071A4"],
        normalizeFunction: "polynomial",
      },
    ],
  },
};
