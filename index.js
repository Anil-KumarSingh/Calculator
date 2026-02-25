let currentDisplay = "";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      currentDisplay = "";
    } 
    else if (value === "=") {
      try {
        currentDisplay = eval(currentDisplay).toString();
      } catch {
        currentDisplay = "Error";
      }
    } 
    else {
      currentDisplay += value;
    }

    display.value = currentDisplay;
  });
});