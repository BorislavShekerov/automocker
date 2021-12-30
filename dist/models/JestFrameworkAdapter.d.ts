/// <reference types="jest" />
import { MockingFrameworkAdapter } from './MockingFrameworkAdapter';
export interface JestMockingFramework {
    fn: () => jest.Mock<any, any>;
}
export declare class JestFrameworkAdapter implements MockingFrameworkAdapter<jest.Mock<any, any>> {
    private jest;
    constructor(jest: JestMockingFramework);
    createMockFunction(): jest.Mock<any, any>;
}
