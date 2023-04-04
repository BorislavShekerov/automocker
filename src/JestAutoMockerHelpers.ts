export type MockedFunction = jest.Mock<any, any>

export function mockReturnValue<T extends MockedFunction>(targetFunction: T, value: ReturnType<T>) {
  targetFunction.mockReturnValue(value)
}

export function mockImplementation<T extends MockedFunction>(targetFunction: T, newImplementation: () => ReturnType<T>) {
  targetFunction.mockImplementation(newImplementation)
}

export function mockImplementationOnce<T extends MockedFunction>(targetFunction: T, newImplementation: () => ReturnType<T>) {
  targetFunction.mockImplementationOnce(newImplementation)
}

export function mockResolvedValue<T extends MockedFunction>(targetFunction: T, value: Awaited<ReturnType<T>>) {
  targetFunction.mockResolvedValue(value)
}

export function mockRejectedValue<T extends MockedFunction>(targetFunction: T, value: Awaited<ReturnType<T>>) {
  targetFunction.mockRejectedValue(value)
}
