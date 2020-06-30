var DisplayView = function (model) {

    this.init = function () {
        this.createDspElement();
    }
    this.createDspElement = function () {
        this.element = document.createElement("input");
        this.element.setAttribute("type", "text");
        // this.element.readOnly = true;
        // this.element.onmouseover = function () { this.element.color = "red"; };
        this.element.id = model.id;
        this.element.value = model.value;
        this.element.style.height = model.options.height;
        this.element.style.width = model.options.width;
        //this.element.getElementById("display").className = model.options.className;
    }
    this.init();
    return this.element;



};