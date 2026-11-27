// Regenerates the favicon set from the untouched logo. The logo is only padded to square with
// its own white background and resized: no crop, recolour or effects.
// Run: node scripts/make-favicons.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const src = 'src/assets/logo/cheapox-logo.jpg';
const meta = await sharp(src).metadata();
const side = Math.max(meta.width, meta.height);
const square = await sharp(src)
  .extend({ top: 0, bottom: side - meta.height, left: 0, right: side - meta.width, background: '#ffffff' })
  .toBuffer();

const png = (size) => sharp(square).resize(size, size, { kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();
await writeFile('public/favicon-192.png', await png(192));
await writeFile('public/favicon-512.png', await png(512));
await writeFile('public/apple-touch-icon.png', await png(180));

// favicon.ico holding a single 32x32 PNG (valid ICO, supported by every current browser)
const p32 = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(p32.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, p32]));
console.log('favicons written');
