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
var core_1 = require('@angular/core');
var tag_service_1 = require("./tag.service");
var TagListComponent = (function () {
    function TagListComponent(tagsService) {
        this.tagsService = tagsService;
    }
    TagListComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    TagListComponent.prototype.getTags = function () {
        var _this = this;
        this.tagsService.getTags().then(function (tags) { return _this.tags = tags; });
    };
    TagListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tags-component',
            templateUrl: 'tag-list.component.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof tag_service_1.TagService !== 'undefined' && tag_service_1.TagService) === 'function' && _a) || Object])
    ], TagListComponent);
    return TagListComponent;
    var _a;
}());
exports.TagListComponent = TagListComponent;
//# sourceMappingURL=tag-list.component.js.map