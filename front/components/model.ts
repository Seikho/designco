import ko = require("knockout");
export = Model;

class Model<T> {
    constructor(model?: T) {
        if (model) this.loadModel(model);
        else this.originalModel = <T>{};
    }

    originalModel: T = null;
    loadModel = (model: T) => {
        this.originalModel = model;
        this.modelKeys = [];
        
        Object.keys(model)
            .forEach(key => {
                var prop = this[key];
                if (!ko.isObservable(prop)) return;
                this.modelKeys.push(key);
                prop(model[key]);
            });
    }

    saveToModel = (): T => {
        var model: T = <T>{};

        this.modelKeys.forEach(key => {
           var prop = this[prop];
           if (!ko.isObservable(prop)) return; // This shouldn't occur
           model[key] = prop();           
        });
        
        return model;
    }
    
    isDirty = ko.computed(() => {
        var hasAnyProperties = Object.keys(this.originalModel).length > 0;
        if (!hasAnyProperties) return true;
        
        
    });

    modelKeys: string[] = [];
}