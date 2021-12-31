"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinonFrameworkAdapter = void 0;
class SinonFrameworkAdapter {
    constructor(sinon) {
        this.sinon = sinon;
    }
    createMockFunction() {
        return this.sinon.stub();
    }
}
exports.SinonFrameworkAdapter = SinonFrameworkAdapter;
//# sourceMappingURL=SinonFrameworkAdapter.js.map