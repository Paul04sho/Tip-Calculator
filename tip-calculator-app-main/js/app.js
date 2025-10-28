// Select elements
const billAmount = document.getElementById('bill');
const numberOfPeople = document.getElementById('people');
const customInput = document.getElementById('custom-tip');
const billTipAmount = document.getElementById('tip-amount');
const billTotalPerPerson = document.getElementById('total-amount');
const tipPercentage = document.querySelectorAll('.buttons button');

// Attach event listeners
tipPercentage.forEach((button) => {
    button.addEventListener('click', (e) => {
        let tipValue = e.target.innerText;
        tipValue = tipValue.slice(0, -1);

        if (billAmount.value === "") return;
        if (numberOfPeople.value === "") numberOfPeople.value = 1;

        calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipValue),
            parseInt(numberOfPeople.value)
        );
    });
})

function calculateTip (billAmount, tipPercentage, numberOfPeople) {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerPerson.innerHTML = `$${totalAmount}`
}

