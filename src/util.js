var deepClone = function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
};


exports.deepClone = deepClone;