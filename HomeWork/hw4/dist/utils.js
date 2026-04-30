"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = identity;
exports.filterArray = filterArray;
function identity(value) {
    return value;
}
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
