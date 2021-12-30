"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentClass = void 0;
class ParentClass {
    constructor(dependency) {
        this.dependency = dependency;
    }
    sum() {
        return 1 + this.dependency.returnRandomNumber();
    }
}
exports.ParentClass = ParentClass;
//# sourceMappingURL=ParentClass.js.map