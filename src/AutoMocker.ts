import { JestFrameworkAdapter, JestMockingFramework, MockingFrameworkAdapter, SinonFrameworkAdapter, SinonMockingFramework } from './models'

type Class<T> = new (...args: any[]) => T

/** A utility allowing for hollow mock class instance creation. */
export class AutoMocker<T> {
  constructor(private mockingFrameworkAdapter: MockingFrameworkAdapter<T>) {}

  /** Creates a class instance of the input type, mocking all of its */
  createMockInstance<K>(TheClass: Class<K>): Record<keyof K, T> & K {
    const classInstance = new TheClass()

    return Object.getOwnPropertyNames(TheClass.prototype).reduce(
      (acc, functionName) =>
        functionName !== 'constructor'
          ? {
              ...acc,
              [functionName]: this.mockingFrameworkAdapter.createMockFunction(),
            }
          : acc,
      classInstance as Record<keyof K, T> & K,
    )
  }

  static createJestMocker(jest: JestMockingFramework) {
    return new AutoMocker(new JestFrameworkAdapter(jest))
  }

  static createSinonMocker(sinon: SinonMockingFramework) {
    return new AutoMocker(new SinonFrameworkAdapter(sinon))
  }
}
