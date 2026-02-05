import { MockingFrameworkAdapter } from './MockingFrameworkAdapter'
import type { Mock } from 'vitest'

export interface VitestMockingFramework {
  fn: () => Mock<any>
}

export class VitestFrameworkAdapter implements MockingFrameworkAdapter<Mock<any>> {
  constructor(private vitest: VitestMockingFramework) {}

  createMockFunction(): Mock<any> {
    return this.vitest.fn()
  }
}
