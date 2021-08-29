import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

export default config
