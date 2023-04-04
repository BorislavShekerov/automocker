import { DependencyClass } from './classes/DependencyClass'
import { ParentClass } from './classes/ParentClass'
import { AutoMocker } from '../AutoMocker'
import { mockImplementation, mockImplementationOnce, mockRejectedValue, mockResolvedValue, mockReturnValue } from '../JestAutoMockerHelpers'

describe('JestAutomockerHelpers', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  describe('mockReturnValue', () => {
    it('using mockReturnValue directly from a mocked function is not type safe', () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      instance.returnRandomNumber.mockReturnValue('2')

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()
      // Assert
      expect(value).toEqual('12')
    })

    it('we can still determine the intended return type of the method through ReturnType', () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      // mockReturnValue(instance.returnRandomNumber, '2') // This will give a compile time error alerting them of a mismatch in expectations
      mockReturnValue(instance.returnRandomNumber, 2)

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()

      // Assert
      expect(value).toEqual(3)
    })
  })
  describe('mockResolvedValue', () => {
    it('using mockResolvedValue directly from a mocked function is not type safe', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      instance.returnRandomNumberAsynchronously.mockResolvedValue('2')

      const parentClass = new ParentClass(instance)
      // Act
      const value = await parentClass.sumWithAsyncStep()
      // Assert
      expect(value).toEqual('12')
    })

    it('we can still determine the intended return type of the method through ReturnType', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      // mockResolvedValue(instance.returnRandomNumber, '2')  // This will give a compile time error alerting them of a mismatch in expectations
      mockResolvedValue(instance.returnRandomNumberAsynchronously, 2)

      const parentClass = new ParentClass(instance)
      // Act
      const value = await parentClass.sumWithAsyncStep()

      // Assert
      expect(value).toEqual(3)
    })
  })

  describe('mockRejectedValue', () => {
    it('using mockRejectedValue directly from a mocked function is not type safe', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      instance.returnRandomNumberAsynchronously.mockRejectedValue('2')

      const parentClass = new ParentClass(instance)
      // Act
      const action = parentClass.sumWithAsyncStep()
      // Assert
      await expect(action).rejects.toEqual('2')
    })

    it('we can still determine the intended return type of the method through ReturnType', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      // mockRejectedValue(instance.returnRandomNumber, '2')  // This will give a compile time error alerting them of a mismatch in expectations
      mockRejectedValue(instance.returnRandomNumberAsynchronously, 2)

      const parentClass = new ParentClass(instance)
      // Act
      const action = parentClass.sumWithAsyncStep()

      // Assert
      await expect(action).rejects.toEqual(2)
    })
  })

  describe('mockImplementation', () => {
    it('using mockImplementation directly from a mocked function is not type safe', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      instance.returnRandomNumber.mockImplementation(() => '2')

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()
      // Assert
      expect(value).toEqual('12')
    })

    it('we can still determine the intended return type of the method through ReturnType', async () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      // mockImplementation(instance.returnRandomNumber, () => '2')  // This will give a compile time error alerting them of a mismatch in expectations
      mockImplementation(instance.returnRandomNumber, () => 2)

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()

      // Assert
      expect(value).toEqual(3)
    })
  })

  describe('mockImplementationOnce', () => {
    it('using mockImplementation directly from a mocked function is not type safe', () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      instance.returnRandomNumber.mockImplementationOnce(() => '2')

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()
      // Assert
      expect(value).toEqual('12')
    })

    it('we can still determine the intended return type of the method through ReturnType', () => {
      // Assert
      const mocker = AutoMocker.createJestMocker(jest)
      const instance = mocker.createMockInstance(DependencyClass)
      // mockImplementationOnce(instance.returnRandomNumber, () => '2')  // This will give a compile time error alerting them of a mismatch in expectations
      mockImplementationOnce(instance.returnRandomNumber, () => 2)

      const parentClass = new ParentClass(instance)
      // Act
      const value = parentClass.sum()

      // Assert
      expect(value).toEqual(3)
    })
  })
})
