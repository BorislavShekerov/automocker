import { AutoMocker } from '../AutoMocker'
import { SubClass } from './inheritance/SubClass'

describe('AutoMocker with Inheritance', () => {
  it('mocks methods of SubClass including inherited methods', () => {
    // Arrange
    const mocker = AutoMocker.createJestMocker(jest)
    const mockInstance = mocker.createMockInstance(SubClass)

    // Act & Assert
    expect(jest.isMockFunction(mockInstance.baseMethod)).toBe(true)
    expect(jest.isMockFunction(mockInstance.subMethod)).toBe(true)
  })
})
