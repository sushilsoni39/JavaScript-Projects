var DisplayController = function (id, value, options) {
    this.init = function () {
        this.dspModel = new DisplayModel(id, value, options);
        this.dspView = new DisplayView(this.dspModel);
    }

    this.getDsp = function () {
        return this.dspView;
    }


    this.init();
    return this;
};
