var NumberButtonModel = function (id, value, options) {

        ButtonModel.call(this, id, value, options);
}
NumberButtonModel.prototype = Object.create(ButtonModel.prototype);
NumberButtonModel.prototype.constructor = NumberButtonModel;
