var ButtonView = function (model) {
    this.init = function () {
        this.createBtnElement(model);

    }

    this.createBtnElement = function (model) {
        this.element = document.createElement("button");
        this.element.setAttribute("type", "button");
        this.element.setAttribute('id', model.id);
        //this.element.className = model.options.className;
        this.element.innerHTML = model.value;
        this.element.style.height = model.options.height+'px';
        this.element.style.width = model.options.width+'px';
    }

    this.init();

    return this.element;
};