var window = window ?? self;    // On MV3, service worker does not have window object.

try {

  let sc = self.crypto;

  // Tom 20220912: jsrsasign-all-min.js is causing self.crypto becoming undefined.
  importScripts("backlibs.js");

  self.crypto = sc;

  importScripts("core.min.js");

  importScripts("bInit.js");
} catch (err) {

  console.error("Error importing background scripts.", err);
}