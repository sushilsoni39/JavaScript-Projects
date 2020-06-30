var OperatorButtonController = function (id, value, options) {
    ButtonController.call(this, id, value, options);

    var init = function () {
    }
    init();
}

OperatorButtonController.prototype = Object.create(new ButtonController());
OperatorButtonController.prototype.constructor = OperatorButtonController;
