"use strict";
(function (tagType) {
    tagType[tagType["CHARACTER"] = 0] = "CHARACTER";
    tagType[tagType["EVENT"] = 1] = "EVENT";
})(exports.tagType || (exports.tagType = {}));
var tagType = exports.tagType;
var FairviewTag = (function () {
    function FairviewTag(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    return FairviewTag;
}());
exports.FairviewTag = FairviewTag;
//# sourceMappingURL=fairviewTag.js.map