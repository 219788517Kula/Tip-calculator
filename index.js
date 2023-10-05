const bilAmount = document.getElementById("billAmount");

const tipPerc = document.getElementById("tipPercentage");

const tot = document.getElementById("total");


const buttonE1 = document.getElementById("calculate");
function calculateTotal() {
    const amount = bilAmount.value;
    const percentage = tipPerc.value;
    const Total = amount*(1 + percentage/100);
    tot.innerText = Total.toFixed(2);
}
buttonE1.addEventListener("click", calculateTotal);