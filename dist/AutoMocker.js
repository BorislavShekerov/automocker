"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoMocker = void 0;
const models_1 = require("./models");
class AutoMocker {
    constructor(mockingFrameworkAdapter) {
        this.mockingFrameworkAdapter = mockingFrameworkAdapter;
    }
    createClassMockInstance(TheClass) {
        const classInstance = new TheClass();
        return Object.getOwnPropertyNames(TheClass.prototype).reduce((acc, functionName) => functionName !== 'constructor'
            ? Object.assign(Object.assign({}, acc), { [functionName]: this.mockingFrameworkAdapter.createMockFunction() }) : acc, classInstance);
    }
    static createJestMocker(jest) {
        return new AutoMocker(new models_1.JestFrameworkAdapter(jest));
    }
}
exports.AutoMocker = AutoMocker;
//# sourceMappingURL=AutoMocker.js.map