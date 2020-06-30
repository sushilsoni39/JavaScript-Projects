var CalculatorView = function (model, display, numericButtons, operatorButtons, eqlCButton) {
    var calView, scope = this;
    var init = function () {
        createCalElement();
    }
    var createCalElement = function () {
        calView = document.createElement("div");
        calView.className = "calClass";
        calView.id = model.id;

        var displayView = document.createElement("div");
        displayView.className = "displayClass";
        displayView.appendChild(display);
        calView.appendChild(displayView);

        var buttonSet = document.createElement("div");
        buttonSet.className = "buttonClass";

        var numericButtonsSet = document.createElement("div");
        numericButtonsSet.className = "numberClass";
        for (var i = 0; i < numericButtons.length; i++) {

            numericButtonsSet.appendChild(numericButtons[i]);
        }

        buttonSet.appendChild(numericButtonsSet);


        var operatorButtonsSet = document.createElement("div");
        operatorButtonsSet.className = "operatorClass";

        for (var i = 0; i < operatorButtons.length; i++) {
            operatorButtonsSet.appendChild(operatorButtons[i]);

        }

        buttonSet.appendChild(operatorButtonsSet);



        var eqlCButtonSet = document.createElement("div");
        eqlCButtonSet.className = "eqlCClass";
        for (var i = 0; i < eqlCButton.length; i++) {
            eqlCButtonSet.appendChild(eqlCButton[i]);
        }
        numericButtonsSet.appendChild(eqlCButtonSet);

        calView.appendChild(buttonSet);

        var br1 = document.createElement("BR");
        calView.appendChild(br1);




        scope.render();
    }
    this.render = function () {
        document.body.appendChild(calView);
        var br1 = document.createElement("br");
        document.body.appendChild(br1);
    }

    init();
    return scope;
}