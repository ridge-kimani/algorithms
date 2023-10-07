"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abs_1 = __importDefault(require("@/maths/abs"));
describe('ABS', () => {
    it('throws an error for invalid types', () => {
        expect(() => (0, abs_1.default)('test01')).toThrow();
        expect(() => (0, abs_1.default)({})).toThrow();
        expect(() => (0, abs_1.default)([])).toThrow();
    });
    it('should typecast strings to integers and return its abs', () => {
        expect((0, abs_1.default)('-20212223')).toBe(20212223);
        expect((0, abs_1.default)('-20212223.252627')).toBe(20212223.252627);
    });
    it('should return an absolute value of a negative number', () => {
        expect((0, abs_1.default)(-34)).toBe(34);
    });
    it('should return an absolute value of a positive number', () => {
        expect((0, abs_1.default)(50)).toBe(50);
    });
    it('should return an absolute value of a zero number', () => {
        expect((0, abs_1.default)(0)).toBe(0);
    });
    it('should return an absolute value of any floating number', () => {
        expect((0, abs_1.default)(-20.212223)).toBe(20.212223);
    });
    it('should return falsy or truthy values for booleans', () => {
        expect((0, abs_1.default)(true)).toBe(1);
        expect((0, abs_1.default)(false)).toBe(0);
    });
});
