"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyClass = void 0;
class DependencyClass {
    // Proves that constructor params are disregarded
    constructor(_foo, _bar) {
        this.a = 2;
    }
    returnRandomNumber() {
        return 50 * Math.random();
    }
}
exports.DependencyClass = DependencyClass;
//# sourceMappingURL=DependencyClass.js.map