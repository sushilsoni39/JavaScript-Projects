var OperatorButtonModel = function (id, value, options) {
    ButtonModel.call(this, id, value, options);
    var init = function()
    {
    }
    init();
}
OperatorButtonModel.prototype = Object.create(ButtonModel.prototype)
OperatorButtonModel.prototype.constructor = OperatorButtonModel;