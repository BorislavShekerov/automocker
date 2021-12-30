import { MockingFrameworkAdapter } from './MockingFrameworkAdapter'

export interface JestMockingFramework {
  fn: () => jest.Mock<any, any>
}

export class JestFrameworkAdapter implements MockingFrameworkAdapter<jest.Mock<any, any>> {
  constructor(private jest: JestMockingFramework) {}

  createMockFunction(): jest.Mock<any, any> {
    return this.jest.fn()
  }
}
