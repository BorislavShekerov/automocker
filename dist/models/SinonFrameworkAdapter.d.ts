/// <reference types="sinon" />
import { MockingFrameworkAdapter } from './MockingFrameworkAdapter';
export interface SinonMockingFramework {
    stub: () => sinon.SinonStub<any[], any>;
}
export declare class SinonFrameworkAdapter implements MockingFrameworkAdapter<sinon.SinonStub<any[], any>> {
    private sinon;
    constructor(sinon: SinonMockingFramework);
    createMockFunction(): sinon.SinonStub<any[], any>;
}
