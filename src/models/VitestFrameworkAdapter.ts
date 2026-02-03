import { MockingFrameworkAdapter } from './MockingFrameworkAdapter'
import vitest from 'vitest'

export interface VitestMockingFramework {
  fn: () => vitest.MockedFunction<any>
}

export class VitestFrameworkAdapter implements MockingFrameworkAdapter<vitest.MockedFunction<any>> {
  constructor(private vitest: VitestMockingFramework) {}

  createMockFunction(): vitest.MockedFunction<any> {
    return this.vitest.fn()
  }
}
