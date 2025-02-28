document.addEventListener("DOMContentLoaded", function () {
    const btnE1 = document.getElementById("calculate");
    const billInput = document.getElementById("bill");
    const tipInput = document.getElementById("tip");
    const totalSpan = document.getElementById("total");

    function calculateTotal() {
        const billValue = parseFloat(billInput.value);
        const tipValue = parseFloat(tipInput.value);

        // Validate Inputs
        if (isNaN(billValue) || isNaN(tipValue) || billValue < 0 || tipValue < 0) {
            totalSpan.innerText = "Invalid Input";
            return;
        }

        const totalValue = billValue * (1 + tipValue / 100);
        totalSpan.innerText = `₹${totalValue.toFixed(2)}`;
    }

    btnE1.addEventListener("click", calculateTotal);
});
