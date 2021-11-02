import { frRegionsMerc } from "@react-jvectormap/franceregions";
import {
  VectorMapBuilder,
  SeriesBuilder,
  AttributeSeriesBuilder,
} from "@react-jvectormap/core";
import { FranceElections } from "./data/FranceElections";

const electionsSeries = new AttributeSeriesBuilder("fill")
  .setScale({
    1: "#4169E1",
    2: "#FF69B4",
  })
  .setValues(FranceElections.results)
  .build();

const series = new SeriesBuilder().addRegionsSeries(electionsSeries).build();

const map = new VectorMapBuilder(frRegionsMerc).setSeries(series).build();

export default map;
