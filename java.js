const inputCalc = document.getElementById("display");

    function appendDisplay(value) {
      inputCalc.value += value;
    }

    function calcu() {
      try {
        inputCalc.value = eval(inputCalc.value);
      } catch {
        inputCalc.value = "Syntax";
      }
    }

    function delall() {
      inputCalc.value = "";
    }

