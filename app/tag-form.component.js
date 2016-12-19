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
var tag_service_1 = require('./tag.service');
var TagFormComponent = (function () {
    function TagFormComponent(tagsService) {
        this.tagsService = tagsService;
        this.addDialogue = false;
    }
    TagFormComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    TagFormComponent.prototype.getTags = function () {
        var _this = this;
        this.tagsService.getTags().then(function (tags) {
            _this.tags = tags;
        });
    };
    TagFormComponent.prototype.displayAddDialogue = function () {
        this.addDialogue = true;
        this.newTag = new fairviewTag_1.FairviewTag(this.tags.length, '', fairviewTag_1.tagType.CHARACTER);
    };
    TagFormComponent.prototype.onSubmit = function () {
        this.tags.push(this.newTag);
        this.addDialogue = false;
    };
    TagFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tags-form',
            templateUrl: 'tag-form.component.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof tag_service_1.TagService !== 'undefined' && tag_service_1.TagService) === 'function' && _a) || Object])
    ], TagFormComponent);
    return TagFormComponent;
    var _a;
}());
exports.TagFormComponent = TagFormComponent;
//# sourceMappingURL=tag-form.component.js.map