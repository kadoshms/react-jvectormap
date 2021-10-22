import { usMill } from "@react-jvectormap/maps";
import { USAUnemploymentData as data } from "./data/USAUnemploymentData";

const val = 2009;
const statesValues = jvm.values.apply({}, jvm.values(data.states));
const metroPopValues = Array.prototype.concat.apply(
  [],
  jvm.values(data.metro.population),
);
const metroUnemplValues = Array.prototype.concat.apply(
  [],
  jvm.values(data.metro.unemployment),
);

export default {
  map: usMill,
  markers: data.metro.coords,
  series: {
    markers: [
      {
        attribute: "fill",
        scale: ["#FEE5D9", "#A50F15"],
        values: data.metro.unemployment[val],
        min: jvm.min(metroUnemplValues),
        max: jvm.max(metroUnemplValues),
      },
      {
        attribute: "r",
        scale: [5, 20],
        values: data.metro.population[val],
        min: jvm.min(metroPopValues),
        max: jvm.max(metroPopValues),
      },
    ],
    regions: [
      {
        scale: ["#DEEBF7", "#08519C"],
        attribute: "fill",
        values: data.states[val],
        min: jvm.min(statesValues),
        max: jvm.max(statesValues),
      },
    ],
  },
  onMarkerTipShow: function (event, label, index) {
    label.html(
      "<b>" +
        data.metro.names[index] +
        "</b><br/>" +
        "<b>Population: </b>" +
        data.metro.population[val][index] +
        "</br>" +
        "<b>Unemployment rate: </b>" +
        data.metro.unemployment[val][index] +
        "%",
    );
  },
  onRegionTipShow: function (event, label, code) {
    label.html(
      "<b>" +
        label.html() +
        "</b></br>" +
        "<b>Unemployment rate: </b>" +
        data.states[val][code] +
        "%",
    );
  },
};
