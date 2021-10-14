// const { program } = require("commander");
const { execSync } = require("child_process");
//
// program
//   .option("-n --name <name>", "map name")
//   .option("-p --projection <projection>", "map projection")
//   .option("-l --lang <lang>", "map language")
//   .option("-f --folder <folder>", "folder path")
//   .parse(process.argv);
//
// const { name, projection, lang, folder } = program.opts();
//
// if (!name || !projection) {
//   console.error("Missing name or projection");
//   process.exit(1);
// }
//
// const mapFileName = [name, projection, lang]
//   .filter((x) => x)
//   .join("-")
//   .concat(".js");
//
// execSync(`wget https://jvectormap.com/js/${folder ? `${folder}/` : ''}jquery-jvectormap-${mapFileName} --no-check-certificate -P output`);
const states = [
  "us-va",
  "us-pa",
  "us-tn",
  "us-wv",
  "us-nv",
  "us-tx",
  "us-nh",
  "us-ny",
  "us-hi",
  "us-vt",
  "us-nm",
  "us-nc",
  "us-nd",
  "us-ne",
  "us-la",
  "us-sd",
  "us-dc",
  "us-de",
  "us-fl",
  "us-ct",
  "us-wa",
  "us-ks",
  "us-wi",
  "us-or",
  "us-ky",
  "us-me",
  "us-oh",
  "us-ok",
  "us-id",
  "us-wy",
  "us-ut",
  "us-in",
  "us-il",
  "us-ak",
  "us-nj",
  "us-co",
  "us-md",
  "us-ma",
  "us-al",
  "us-mo",
  "us-mn",
  "us-ca",
  "us-ia",
  "us-mi",
  "us-ga",
  "us-az",
  "us-mt",
  "us-ms",
  "us-sc",
  "us-ri",
  "us-ar",
];

states.forEach(st => {
  const folder = 'us-counties';
  const mapFileName = `data-${st}-lcc-en.js`;
  execSync(`wget https://jvectormap.com/js/${folder ? `${folder}/` : ''}jquery-jvectormap-${mapFileName} --no-check-certificate -P output`);
})
