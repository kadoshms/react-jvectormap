const fs = require("fs");
const mapsSource = `../../packages/maps/src/`;

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getMaps = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.name !== "index.ts")
    .map((dirent) => dirent.name.split(".")[0]);

const countries = getDirectories(mapsSource);

const getProjections = (maps) => {
  return [
    ["Mill", "Miller"],
    ["Merc", "Mercator"],
    ["Aea", "Albers"],
    ["Lcc", "Lambert"],
  ].reduce((acc, cur) => {
    const [suff, name] = cur;
    if (maps.find((x) => x.includes(suff))) {
      return acc.concat(name);
    }
    return acc;
  }, []);
};

countries.forEach((country) => {
  const maps = getMaps(`${mapsSource}/${country}/`);
  const imports = maps.join(", ");
  const projections = getProjections(maps);
  const exports = projections.map((proj, i) => `export const ${proj} = MapTemplate.bind({});
  ${proj}.args = {
    map: ${maps[i]},
    fileName: '${maps[i]}'
  };
`).join('\n');
        const story = `import { VectorMap } from "@react-jvectormap/core";
  import { ${imports} } from "@react-jvectormap/maps";
  import { MapTemplate } from "../components/MapContainer/MapTemplate";

  export default {
    title: "maps/Map/${country}",
    component: VectorMap,
    argTypes: {},
  };
  
  ${exports}
  `;

  const fileName = `${country}.stories.js`;
  fs.writeFileSync(`../../stories/maps/${fileName}`, story);
});
