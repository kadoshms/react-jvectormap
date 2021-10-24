import { deMerc } from "@react-jvectormap/maps";
import {
  VectorMapBuilder,
  SeriesBuilder,
  AttributeSeriesBuilder,
  StyleBuilder,
} from "@react-jvectormap/core";

const markers = [
  { latLng: [52.5, 13.39], name: "Berlin" },
  { latLng: [53.56, 10.0], name: "Hamburg" },
  { latLng: [48.13, 11.56], name: "Munich" },
  { latLng: [50.95, 6.96], name: "Cologne" },
  { latLng: [50.11, 8.68], name: "Frankfurt am Main" },
  { latLng: [48.77, 9.17], name: "Stuttgart" },
  { latLng: [51.23, 6.78], name: "Düsseldorf" },
  { latLng: [51.51, 7.46], name: "Dortmund" },
  { latLng: [51.45, 7.01], name: "Essen" },
  { latLng: [53.07, 8.8], name: "Bremen" },
];
const cityAreaData = [
  887.7, 755.16, 310.69, 405.17, 248.31, 207.35, 217.22, 280.71, 210.32, 325.42,
];

const markerStyle = new StyleBuilder()
  .setInitial({ fill: '"#4DAC26"' })
  .setSelected({ fill: "#CA0020" })
  .build();

const regionStyle = new StyleBuilder()
  .setInitial({ fill: "#B8E186" })
  .setSelected({ fill: "#F4A582" })
  .build();

const markersSeries = new AttributeSeriesBuilder("r")
  .setScale([5, 15])
  .setValues(cityAreaData)
  .build();
const series = new SeriesBuilder().addMarkersSeries(markersSeries).build();

const map = new VectorMapBuilder(deMerc)
  .setMarkerStyle(markerStyle)
  .setRegionStyle(regionStyle)
  .setRegionsSelectable(true)
  .setMarkersSelectable(true)
  .setSeries(series)
  .setSelectedRegions(["DE-ST", "DE-RP"])
  .setMarkers(markers)
  .build();

export default map;
