var ko = require("knockout");
var Model = (function () {
    function Model(model) {
        var _this = this;
        this.originalModel = null;
        this.loadModel = function (model) {
            _this.originalModel = model;
            _this.modelKeys = [];
            Object.keys(model)
                .forEach(function (key) {
                var prop = _this[key];
                if (!ko.isObservable(prop))
                    return;
                _this.modelKeys.push(key);
                prop(model[key]);
            });
        };
        this.saveToModel = function () {
            var model = {};
            _this.modelKeys.forEach(function (key) {
                var prop = _this[prop];
                if (!ko.isObservable(prop))
                    return; // This shouldn't occur
                model[key] = prop();
            });
            return model;
        };
        this.isDirty = ko.computed(function () {
        });
        this.modelKeys = [];
        if (model)
            this.loadModel(model);
        else
            this.originalModel = {};
    }
    return Model;
})();
module.exports = Model;
//# sourceMappingURL=model.js.map