import * as crypto from "crypto";

const tokenExpires = new Date();
tokenExpires.setHours(tokenExpires.getHours() + 48);

export default {
  keyPerfil: crypto.randomBytes(8).toString("hex"),
  keyBanner: crypto.randomBytes(8).toString("hex"),
  token: crypto.randomBytes(20).toString("hex"),
  bannerRandom: Math.floor(Math.random() * (22 - 1)) + 1,
  tokenExpires,
};
