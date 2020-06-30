var ButtonController = function (id, value, options) {
    this.init = function () {

        this.btnModel = new ButtonModel(id, value, options);
        this.btnView = new ButtonView(this.btnModel);
        var s = this;
        this.btnView.onclick = function (event) {
            s.onClickHandler(event, id, value);
        }

    }
    this.onClickHandler = function (event, id, value) {
        //alert(value);
    }

    this.getBtn = function () {
        return this.btnView;
    }



    this.init();
    return this;

};




