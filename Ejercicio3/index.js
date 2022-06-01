const path = require("path");
const arg = process.argv.slice(2);
const sharp = require("sharp");
const fs = require("fs/promises");

const [imagePath] = arg; //arg out

const createImageSamples = async () => {
  try {
    if (!imagePath) {
      throw new Error("There should be an image path");
    }
    await fs.access(imagePath);
    const samplesPath = path.join(imagePath, "..", "samples");

    await fs.mkdir(samplesPath);
    const imageExt = path.extname(imagePath);

    await sharp(imagePath)
      .resize({ width: 100 })
      .toFile(path.join(samplesPath, `100${imageExt}`));

    await sharp(imagePath)
      .resize({ width: 300 })
      .greyscale()
      .toFile(path.join(samplesPath, `black&white${imageExt}`));

    await sharp(imagePath)
      .resize({ width: 500, height: 250 })
      .tint({ r: 200, g: 40, b: 40 })
      .toFile(path.join(samplesPath, `redish${imageExt}`));

    await sharp(imagePath)
      .resize({ width: 500 })
      .tint({ r: 50, g: 40, b: 200 })
      .toFile(path.join(samplesPath, `bluish${imageExt}`));
  } catch (error) {
    if (error.code === ENOENT) {
      console.error(`This image path does not exist`);
    } else console.error(error.message);
  }
};
createImageSamples();
