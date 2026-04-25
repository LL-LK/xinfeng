import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname } from 'path';

const QUALITY = 75;
const SRC_DIR = 'public/assets';
const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg'];

async function convertToWebP(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertToWebP(fullPath);
      continue;
    }

    const ext = extname(entry.name).toLowerCase();
    if (!SUPPORTED_EXTS.includes(ext)) continue;

    const webpPath = fullPath.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');

    try {
      const sourceStat = await stat(fullPath);
      await sharp(fullPath)
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(webpPath);
      const webpStat = await stat(webpPath);
      const savings = ((1 - webpStat.size / sourceStat.size) * 100).toFixed(1);
      console.log(`OK ${fullPath} -> ${webpPath} (${savings}% smaller)`);
    } catch (err) {
      console.error(`FAIL ${fullPath}: ${err}`);
    }
  }
}

convertToWebP(SRC_DIR).then(() => console.log('Done!'));
