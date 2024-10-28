import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setulFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1', // Support for path aliases in Next.js
    },
};

export default createJestConfig(customJestConfig);