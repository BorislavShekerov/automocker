/// <reference types="jest" />
import { JestMockingFramework, MockingFrameworkAdapter } from './models';
declare type Class<T> = new (...args: any[]) => T;
export declare class AutoMocker<T> {
    private mockingFrameworkAdapter;
    constructor(mockingFrameworkAdapter: MockingFrameworkAdapter<T>);
    createClassMockInstance<K>(TheClass: Class<K>): Record<keyof K, T> & K;
    static createJestMocker(jest: JestMockingFramework): AutoMocker<jest.Mock<any, any>>;
}
export {};
