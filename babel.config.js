module.exports = {
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry"
      }
    ]
  ]
};
