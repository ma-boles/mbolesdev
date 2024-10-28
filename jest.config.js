//import nextJest from 'next/jest';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1', // Support for path aliases in Next.js
    },
};

//export default createJestConfig(customJestConfig);

module.exports = createJestConfig(customJestConfig);