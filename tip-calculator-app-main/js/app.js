// Select elements
let BillAmount = document.getElementById('bill');
let numberOfPeople = document.getElementById('people');
let customInput = document.getElementById('custom-tip');
let tipPercentage = document.querySelectorAll('.buttons button');
let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total-amount');

// Attach event listeners
tipPercentage.forEach(button => {
    button.addEventListener('click', calculateTip);
})

function calculateTip (e) {
    e.preventDefault();

    // Convert input values to numbers
    BillAmount = parseFloat(BillAmount.value);
    tipAmount = BillAmount * tipPercentage.value / 100;
    totalAmount = BillAmount + tipAmount;
}

