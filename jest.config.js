module.exports = {
  projects: ['packages/p1'], // BUG? Jest will not read "jest.config.js" from `packages/p1/jest.config.js
  // projects: ['packages/p1', 'packages/p2'], // But specifying two "projects" will make Jest read from both
};
