"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DependencyClass_1 = require("./classes/DependencyClass");
const ParentClass_1 = require("./classes/ParentClass");
const AutoMocker_1 = require("../AutoMocker");
describe('AutoMocker', () => {
    it('createClassMockInstance should create an instance of the class with mocked functions', () => {
        const mocker = AutoMocker_1.AutoMocker.createJestMocker(jest);
        const instance = mocker.createMockInstance(DependencyClass_1.DependencyClass);
        const parentClass = new ParentClass_1.ParentClass(instance);
        instance.returnRandomNumber.mockReturnValue(2);
        const value = parentClass.sum();
        expect(value).toEqual(3);
    });
});
//# sourceMappingURL=AutoMocker.spec.js.map