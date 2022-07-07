module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          icons: './src/assets/icons',
          imgs: './src/assets/images',
        },
      },
    ],
  ],
};
