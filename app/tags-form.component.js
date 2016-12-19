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
var tags_service_1 = require('./tags.service');
var TagsFormComponent = (function () {
    function TagsFormComponent(tagsService) {
        this.tagsService = tagsService;
        this.addDialogue = false;
    }
    TagsFormComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    TagsFormComponent.prototype.getTags = function () {
        var _this = this;
        this.tagsService.getTags().then(function (tags) {
            _this.tags = tags;
        });
    };
    TagsFormComponent.prototype.displayAddDialogue = function () {
        this.addDialogue = true;
        this.newTag = new fairviewTag_1.FairviewTag(this.tags.length, 'Poulpe', fairviewTag_1.tagType.CHARACTER);
    };
    TagsFormComponent.prototype.onSubmit = function () {
        this.tags.push(this.newTag);
        this.addDialogue = false;
    };
    TagsFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tags-form',
            templateUrl: 'tags-form.component.html',
        }), 
        __metadata('design:paramtypes', [tags_service_1.TagsService])
    ], TagsFormComponent);
    return TagsFormComponent;
}());
exports.TagsFormComponent = TagsFormComponent;
//# sourceMappingURL=tags-form.component.js.map