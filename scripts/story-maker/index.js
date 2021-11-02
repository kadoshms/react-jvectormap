const fs = require("fs");
const mapsSource = `../../packages/maps/`;

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getMaps = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => !(['tsconfig', 'package', 'dist', 'index', 'README'].find(x => dirent.name.includes(x))))
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
      return acc.concat([[suff, name]]);
    }
    return acc;
  }, []);
};

countries.forEach((country) => {
  const maps = getMaps(`${mapsSource}/${country}/`).reverse();
  const imports = maps.join(", ");
  const projections = getProjections(maps);
  const exports = projections.map(([suff, proj], i) => `export const ${proj} = MapTemplate.bind({});
  ${proj}.args = {
    map: ${maps.find(x => x.toLowerCase().includes(suff.toLowerCase()))},
    fileName: '${maps.find(x => x.toLowerCase().includes(suff.toLowerCase()))}'
  };
`).join('\n');
        const story = `import { VectorMap } from "@react-jvectormap/core";
  import { ${imports} } from "@react-jvectormap/${country.toLowerCase()}";
  import { MapTemplate } from "../components/MapContainer/MapTemplate";

  export default {
    title: "maps/Map/${country}",
    component: VectorMap,
    argTypes: {},
  };

  ${exports}
  `;

  const mapList = maps.map(x => `   - ${x}`).join('  \n');

  const fileName = `${country}.stories.js`;
  const readme = `# @react-jvectormap/africa

A collection of JvectorMap maps of ${country}.

Available Maps:
${mapList}

## Installation:
\`\`\`
    yarn add @react-jvectormap/${country.toLowerCase()}
\`\`\`

or:

\`\`\`
    npm install --save @react-jvectormap/${country.toLowerCase()}
\`\`\`

## Usage

\`\`\`
    import { ${maps[0]} } from '@react-jvectormap/${country.toLowerCase()}';
 \`\`\`   

or:

\`\`\`
    import ${maps[0]} from '@react-jvectormap/${country.toLowerCase()}/dist/${maps[0]}';
 \`\`\`   
`

  fs.writeFileSync(`../../packages/maps/${country}/README.md`, readme);
});
