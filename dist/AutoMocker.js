"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoMocker = void 0;
const models_1 = require("./models");
/** A utility allowing for hollow mock class instance creation. */
class AutoMocker {
    constructor(mockingFrameworkAdapter) {
        this.mockingFrameworkAdapter = mockingFrameworkAdapter;
    }
    /** Creates a class instance of the input type, mocking all of its */
    createMockInstance(TheClass) {
        const classInstance = new TheClass();
        return Object.getOwnPropertyNames(TheClass.prototype).reduce((acc, functionName) => functionName !== 'constructor'
            ? Object.assign(Object.assign({}, acc), { [functionName]: this.mockingFrameworkAdapter.createMockFunction() }) : acc, classInstance);
    }
    static createJestMocker(jest) {
        return new AutoMocker(new models_1.JestFrameworkAdapter(jest));
    }
    static createSinonMocker(sinon) {
        return new AutoMocker(new models_1.SinonFrameworkAdapter(sinon));
    }
}
exports.AutoMocker = AutoMocker;
//# sourceMappingURL=AutoMocker.js.map