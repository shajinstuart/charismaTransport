import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const url = "https://shajinstuart.github.io/charismaTransport/";
const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "qr");

mkdirSync(outDir, { recursive: true });

const options = {
  errorCorrectionLevel: "H",
  margin: 2,
  color: {
    dark: "#071A2B",
    light: "#FAF6EF",
  },
};

await QRCode.toFile(path.join(outDir, "website.png"), url, {
  ...options,
  type: "png",
  width: 1024,
});

await QRCode.toFile(path.join(outDir, "website.svg"), url, {
  ...options,
  type: "svg",
  width: 1024,
});

console.log(`QR codes created for ${url}`);
