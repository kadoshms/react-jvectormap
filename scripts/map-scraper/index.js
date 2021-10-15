const { program } = require("commander");
const fs = require("fs");
const { execSync } = require("child_process");

program.option("-e --entity <entity>", "entity name").parse(process.argv);

const { entity } = program.opts();

const projections = ["mill", "merc", "aea", "lcc"];

const toCamelCase = (str) =>
  str.replace(/_([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });

const jQuery = {
  fn: {
    vectorMap: (action, name, content) => {
      const mapName = toCamelCase(name);
      const chunks = name.split("_");
      const camelCase = toCamelCase(
        chunks.slice(0, chunks.length - 1).join("_"),
      );
      const entityName = camelCase
        .charAt(0)
        .toUpperCase()
        .concat(camelCase.slice(1));
      const folderPath = `../../packages/maps/src/${entityName}`;
      !fs.existsSync(folderPath) &&
        fs.mkdirSync(folderPath, { recursive: true });
      fs.writeFileSync(
        `${folderPath}/${mapName}.json`,
        JSON.stringify({
          name,
          content,
        }),
      );

      fs.rmSync(`temp.js`);
    },
  },
};

projections.forEach((projection) => {
  try {
    execSync(
      `wget https://jvectormap.com/js/jquery-jvectormap-${entity}-${projection}.js --no-check-certificate -O temp.js`,
    );

    const file = fs.readFileSync("temp.js", "utf8");
    eval(file);
  } catch (err) {
      console.log('Could not download map');
  }
});
