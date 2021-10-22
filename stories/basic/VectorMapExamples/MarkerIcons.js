import { deMerc } from "@react-jvectormap/maps";

const plants = [
  {
    name: "VAK",
    coords: [50.0091294, 9.0371812],
    status: "closed",
    offsets: [0, 2],
  },
  {
    name: "MZFR",
    coords: [49.0543102, 8.4825862],
    status: "closed",
    offsets: [0, 2],
  },
  { name: "AVR", coords: [50.9030599, 6.4213693], status: "closed" },
  { name: "KKR", coords: [53.1472465, 12.9903674], status: "closed" },
  { name: "KRB", coords: [48.513264, 10.4020357], status: "activeUntil2018" },
  { name: "KWO", coords: [49.364503, 9.076252], status: "closed" },
  {
    name: "KWL",
    coords: [52.5331853, 7.2505223],
    status: "closed",
    offsets: [0, -2],
  },
  {
    name: "HDR",
    coords: [50.1051446, 8.9348691],
    status: "closed",
    offsets: [0, -2],
  },
  { name: "KKS", coords: [53.6200685, 9.5306289], status: "closed" },
  {
    name: "KKN",
    coords: [48.6558015, 12.2500848],
    status: "closed",
    offsets: [0, -2],
  },
  { name: "KGR", coords: [54.1417497, 13.6583877], status: "closed" },
  { name: "KWB", coords: [49.709331, 8.415865], status: "closed" },
  { name: "KWW", coords: [51.6396481, 9.3915617], status: "closed" },
  { name: "GKN", coords: [49.0401151, 9.1721088], status: "activeUntil2022" },
  {
    name: "KKB",
    coords: [53.8913533, 9.2005777],
    status: "closed",
    offsets: [0, -5],
  },
  {
    name: "KKI",
    coords: [48.5544748, 12.3472095],
    status: "activeUntil2022",
    offsets: [0, 2],
  },
  { name: "KKU", coords: [53.4293465, 8.4774649], status: "closed" },
  { name: "KNK", coords: [49.1473279, 8.3827739], status: "closed" },
  {
    name: "KKP",
    coords: [49.2513078, 8.4356761],
    status: "activeUntil2022",
    offsets: [0, -2],
  },
  { name: "KKG", coords: [49.9841308, 10.1846373], status: "activeUntil2018" },
  { name: "KKK", coords: [53.4104656, 10.4091597], status: "closed" },
  { name: "KWG", coords: [52.0348748, 9.4097793], status: "activeUntil2022" },
  {
    name: "KBR",
    coords: [53.850666, 9.3457603],
    status: "closed",
    offsets: [0, 5],
  },
  { name: "KMK", coords: [50.408791, 7.4861956], status: "closed" },
  { name: "THTR", coords: [51.6786228, 7.9700232], status: "closed" },
  {
    name: "KKE",
    coords: [52.4216974, 7.3706389],
    status: "activeUntil2022",
    offsets: [0, 2],
  },
];

export default {
  map: deMerc,
  markers: plants.map(function (h) {
    return { name: h.name, latLng: h.coords };
  }),
  labels: {
    markers: {
      render: function (index) {
        return plants[index].name;
      },
      offsets: function (index) {
        var offset = plants[index]["offsets"] || [0, 0];

        return [offset[0] - 7, offset[1] + 3];
      },
    },
  },
  series: {
    markers: [
      {
        attribute: "image",
        scale: {
          closed: require("./assets/icon-np-3.png"),
          activeUntil2018: require("./assets/icon-np-2.png"),
          activeUntil2022: require("./assets/icon-np-1.png"),
        },
        values: plants.reduce(function (p, c, i) {
          p[i] = c.status;
          return p;
        }, {}),
        legend: {
          horizontal: true,
          title: "Nuclear power station status",
          labelRender: function (v) {
            return {
              closed: "Closed",
              activeUntil2018: "Scheduled for shut down<br> before 2018",
              activeUntil2022: "Scheduled for shut down<br> before 2022",
            }[v];
          },
        },
      },
    ],
  },
};
