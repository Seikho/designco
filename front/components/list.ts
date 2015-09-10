import ko = require("knockout");
import Model = require("./model");
import $ = require("jquery");
export = List;

class List<T> {
    constructor(options: App.ListOptions) {
        this.options = options;
        options.url
    }
    options: App.ListOptions;

    models: KnockoutObservableArray<Model<T>> = ko.observableArray([]);
    originalModels: Array<T> = [];

    getModels = (): JQueryPromise<T[]> => {
        return $.get(this.options.url)
            .then((models: T[]) => models);
    }

    /**
     * Load from server and 
     */
    loadModels = () => {
        this.getModels()
            .then(models => {
                this.originalModels = models;
                var newModels = models.map(model => new Model(model));
                this.models(newModels);
            });
    }
    
    
}