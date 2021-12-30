import { DependencyClass } from './classes/DependencyClass'
import { AutoMocker } from '../AutoMocker'
import { ParentClass } from './classes/ParentClass'

describe('AutoMocker', () => {
  it('createClassMockInstance should create an instance of the class with mocked functions', () => {
    const mocker = AutoMocker.createJestMocker(jest)
    const instance = mocker.createMockInstance(DependencyClass)

    const parentClass = new ParentClass(instance)
    instance.returnRandomNumber.mockReturnValue(2)

    const value = parentClass.sum()
    expect(value).toEqual(3)
  })
})
