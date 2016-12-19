"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var fairviewTag_1 = require("./fairviewTag");
var TagComponent = (function () {
    function TagComponent() {
    }
    TagComponent.prototype.onClick = function () {
        var index = this.tags.indexOf(this.tag);
        if (index > -1) {
            this.tags.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagComponent.prototype, "tags", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fairviewTag_1.FairviewTag)
    ], TagComponent.prototype, "tag", void 0);
    TagComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tag-comp',
            templateUrl: 'tag.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TagComponent);
    return TagComponent;
}());
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map