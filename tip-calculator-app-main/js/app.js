// Select elements
const billAmount = document.getElementById('bill');
const numberOfPeople = document.getElementById('people');
const customInput = document.getElementById('custom-tip');
const billTipAmount = document.getElementById('tip-amount');
const billTotalPerPerson = document.getElementById('total-amount');
const tipPercentage = document.querySelectorAll('.buttons button');
const resetButton = document.getElementById('reset-btn');
const errorMessage = document.getElementById('error-message');

// Attach event listeners
tipPercentage.forEach((button) => {
    button.addEventListener('click', (e) => {
        let tipValue = e.target.innerText;
        tipValue = tipValue.slice(0, -1); 

        if (billAmount.value.trim() === "") return;
        if (numberOfPeople.value.trim() === "") numberOfPeople.value = 1;
        if (parseInt(numberOfPeople.value) === 0) {
            errorMessage.style.display = "block";
            numberOfPeople.style.outline = "none";
            numberOfPeople.style.border = "2px solid red";
            return;
        } else {
            errorMessage.style.display = "none";
            numberOfPeople.style.border = "none";
        }

        calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipValue),
            parseInt(numberOfPeople.value)
        );
    });
})

// Custom based calculation
customInput.addEventListener("blur", (e) => {
    if (billAmount.value.trim() === "") {
        resetEverything();
        return;
    }
    if (numberOfPeople.value.trim() === "") numberOfPeople.value = 1;

    calculateTip(
        parseFloat(billAmount.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
    );
});


// Tip calculation function
function calculateTip (billAmount, tipPercentage, numberOfPeople) {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerPerson.innerHTML = `$${totalAmount}`
}

// Reset everything function
resetButton.addEventListener("click", resetEverything);
function resetEverything () {
    billTipAmount.innerHTML = "$0.00";
    billTotalPerPerson.innerHTML = "$0.00";
    billAmount.value = "";
    numberOfPeople.value = "";
    customInput.value = "";
}

