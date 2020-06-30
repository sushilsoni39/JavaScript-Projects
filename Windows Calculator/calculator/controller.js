var CalculatorController = function (id, options) {

    var calView, calModel, display, numericButtons = [], OperatorButtons = [], eqlCButton = [];
    var init = function () {
        createCalcElement();
    }


    var createCalcElement = function () {

        calModel = new CalculatorModel(id);
        var displayId = 'disp' + id;

        display = new DisplayController(displayId, '', options).getDsp();

        setNumericButtons(calModel);
        setOperatorButtons(calModel);
        setEqualCButtons(calModel);

        calView = new CalculatorView(calModel, display, numericButtons, OperatorButtons, eqlCButton);
        calView.render();
    }

    var setNumericButtons = function (model) {
        var val, btnId, btnCtl;
        for (var i = 0; i < model.options.numericButtons.length; i++) {
            val = model.options.numericButtons[i];
            btnId = "nBtn" + i;
            btnCtl = new NumberButtonController(btnId, val, options);
            btnCtl.onClickHandler = function (event, id, value) {
                calculate('number', value);
            }
            numericButtons.push(btnCtl.getBtn());
        }
    }


    var setOperatorButtons = function (model) {
        var val, btnId, btnCtl;
        for (var i = 0; i < model.options.operatorButtons.length; i++) {
            val = model.options.operatorButtons[i];
            btnId = "opBtn" + i + id;
            btnCtl = new OperatorButtonController(btnId, val, options);
            btnCtl.onClickHandler = function (event, id, value) {

                calculate('operator', value);

            }
            OperatorButtons.push(btnCtl.getBtn());
        }
    }

    var calculate = function (type, value) {
        var disValue = display.value;
        disValue += value;

        currentDisplayValue = disValue;
        setDisplay(disValue);
        //return disValue;
    }

    var setEqualCButtons = function (model) {
        for (var i = 0; i < model.options.equC.length; i++) {
            var val = model.options.equC[i];
            var btnId = "eqlC" + i;
            var btnCtl = new ButtonController(btnId, val, options);

            btnCtl.onClickHandler = function (value, id, value) {
                if (value == "C") {
                    var disValue = display.value;
                    disValue = "";
                    setDisplay(disValue);
                }
                if (value == "=") {
                    var disValue = display.value;
                    disValue = eval(display.value);
                    setDisplay(disValue);
                }

            }

            eqlCButton.push(btnCtl.getBtn());

        }
    }







    var setDisplay = function (value) {
        display.value = value;

    }

    init();
    return this;


};


