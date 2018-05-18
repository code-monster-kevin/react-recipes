module.exports = {
  testRegex: '/src/specs/.*?(Spec)\\.js',
  modulePathIgnorePatterns: ['node_modules', 'dist', '__snapshots__'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|gif|png)$': '<rootDir>/src/utils/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/specs/index.js'],
};
