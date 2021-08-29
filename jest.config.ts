import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/$1',
  },
}

export default config
