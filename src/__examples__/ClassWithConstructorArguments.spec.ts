import { AutoMocker } from '../AutoMocker'
import { ClassWithConstructorArguments } from './constructor-args/ClassWithConstructorArguments'

describe('ClassWithConstructorArguments', () => {
  it('should not execute constructor logic for classes with dependencies', () => {
    // Arrange
    const mocker = AutoMocker.createJestMocker(jest)
    const mockInstance = mocker.createMockInstance(ClassWithConstructorArguments)

    // Act & Assert
    expect(jest.isMockFunction(mockInstance.foo)).toBe(true)
  })
})
