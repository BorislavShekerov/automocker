"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestFrameworkAdapter = void 0;
class JestFrameworkAdapter {
    constructor(jest) {
        this.jest = jest;
    }
    createMockFunction() {
        return this.jest.fn();
    }
}
exports.JestFrameworkAdapter = JestFrameworkAdapter;
//# sourceMappingURL=JestFrameworkAdapter.js.map