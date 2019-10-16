module.exports = {
  plugins: ["react-hot-loader/babel"],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry"
      }
    ]
  ]
};
