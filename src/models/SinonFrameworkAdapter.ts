import { MockingFrameworkAdapter } from './MockingFrameworkAdapter'

export interface SinonMockingFramework {
  stub: () => sinon.SinonStub<any[], any>
}

export class SinonFrameworkAdapter implements MockingFrameworkAdapter<sinon.SinonStub<any[], any>> {
  constructor(private sinon: SinonMockingFramework) {}

  createMockFunction(): sinon.SinonStub<any[], any> {
    return this.sinon.stub()
  }
}
