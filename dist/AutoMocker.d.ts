/// <reference types="jest" />
/// <reference types="sinon" />
import { JestMockingFramework, MockingFrameworkAdapter, SinonMockingFramework } from './models';
declare type Class<T> = new (...args: any[]) => T;
/** A utility allowing for hollow mock class instance creation. */
export declare class AutoMocker<T> {
    private mockingFrameworkAdapter;
    constructor(mockingFrameworkAdapter: MockingFrameworkAdapter<T>);
    /** Creates a class instance of the input type, mocking all of its */
    createMockInstance<K>(TheClass: Class<K>): Record<keyof K, T> & K;
    static createJestMocker(jest: JestMockingFramework): AutoMocker<jest.Mock<any, any>>;
    static createSinonMocker(sinon: SinonMockingFramework): AutoMocker<import("sinon").SinonStub<any[], any>>;
}
export {};
