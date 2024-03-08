/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir:'./'
});

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  moduleNameMapper:{
    "@/components/(.*)": "<rootDir>/components/$1",
    "@/lib/(.*)": "<rootDir>/lib/$1",
    "@/actions/(.*)": "<rootDir>/actions/$1",
  },

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

export default createJestConfig(config);
