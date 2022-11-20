const { join } = require("path");

const puppeteer = require.resolve("puppeteer");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(puppeteer, ".cache", "puppeteer"),
};
