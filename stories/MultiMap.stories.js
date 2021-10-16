import { MultiMap } from "@react-jvectormap/core";
import { usLcc } from "@react-jvectormap/maps";
import { MultiMapTemplate } from "./components/MapContainer/MultiMapTemplate";
//
export default {
  title: "core/MultiMap",
  component: MultiMap,
  argTypes: {},
};

export const DrillDownUSMap = MultiMapTemplate.bind({});

DrillDownUSMap.args = {
  description:
    "Following is an example of a MultiMap. Click on Texas map to drill down.",
  main: {
    map: usLcc,
  },
  mapUrlByCode: function (code, multiMap) {
    return `/us-counties/jquery-jvectormap-data-${code.toLowerCase()}-${
      multiMap.defaultProjection
    }-en.json`;
  },
};
