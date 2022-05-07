module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/setup.js'],
  testRegex: '/.+\\.test\\.(js|ts|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
