import { JestFrameworkAdapter, JestMockingFramework, MockingFrameworkAdapter, SinonFrameworkAdapter, SinonMockingFramework } from './models'

type Class<T> = new (...args: any[]) => T

/** A utility allowing for hollow mock class instance creation. */
export class AutoMocker<T> {
  constructor(private mockingFrameworkAdapter: MockingFrameworkAdapter<T>) {}

  /** Creates a class instance of the input type, mocking all of its functions */
  createMockInstance<K>(TheClass: Class<K>): Record<keyof K, T> & K {
    const classInstance: Partial<Record<keyof K, T>> = {}

    let currentPrototype = TheClass.prototype

    const allFunctionNames = new Set<string>()

    while (currentPrototype && currentPrototype !== Object.prototype) {
      Object.getOwnPropertyNames(currentPrototype)
        .filter((name) => typeof currentPrototype[name] === 'function' && name !== 'constructor')
        .forEach((name) => allFunctionNames.add(name))

      currentPrototype = Object.getPrototypeOf(currentPrototype)
    }
    allFunctionNames.forEach((functionName) => {
      classInstance[functionName as keyof K] = this.mockingFrameworkAdapter.createMockFunction()
    })

    return classInstance as Record<keyof K, T> & K
  }

  static createJestMocker(jest: JestMockingFramework) {
    return new AutoMocker(new JestFrameworkAdapter(jest))
  }

  static createSinonMocker(sinon: SinonMockingFramework) {
    return new AutoMocker(new SinonFrameworkAdapter(sinon))
  }
}
