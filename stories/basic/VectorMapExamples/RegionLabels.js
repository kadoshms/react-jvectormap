import { usAea } from "@react-jvectormap/maps";
const map = {
  map: usAea,
  regionLabelStyle: {
    initial: {
      fill: "#B90E32",
    },
    hover: {
      fill: "black",
    },
  },
  labels: {
    regions: {
      render: (code) => {
        const doNotShow = ["US-RI", "US-DC", "US-DE", "US-MD"];

        if (doNotShow.indexOf(code) === -1) {
          return code.split("-")[1];
        }
      },
      offsets: (code) =>
        ({
          CA: [-10, 10],
          ID: [0, 40],
          OK: [25, 0],
          LA: [-20, 0],
          FL: [45, 0],
          KY: [10, 5],
          VA: [15, 5],
          MI: [30, 30],
          AK: [50, -25],
          HI: [25, 50],
        }[code.split("-")[1]]),
    },
  },
};

export default map;
