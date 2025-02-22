module.exports = {
  input: "./apps/frontend/api",
  outputEachDir: false,
  outputMode: "single",
  trailingSlash: false,
  openapi: { inputFile: "./apps/backend/openapi.yaml" }, // ✅ 正しいパスに修正
};