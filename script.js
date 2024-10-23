function AppendToDisplay(value) {
    document.getElementById("display").value += value;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}

function Calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
