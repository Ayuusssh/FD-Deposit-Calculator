document.getElementById('fd-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let withdrawAmount = parseFloat(document.getElementById('withdraw_amount').value);

    let year = 0;
    let balance = principal;
    let output = '';

    output += `<p>Initial Amount Invested: ₹${principal}</p>`;
    output += `<p>Interest Rate: ${(rate * 100)}% per year</p>`;
    output += `<p>Target Withdrawal Amount: ₹${withdrawAmount}</p>`;
    output += `<h3>Yearly Investment Progress:</h3>`;

    while (balance < withdrawAmount) {
        year += 1;
        balance += balance * rate;
        output += `<p>Year ${year}: ₹${balance.toFixed(2)}</p>`;
    }

    output += `<p><strong>Target reached in ${year} years with a final balance of ₹${balance.toFixed(2)}</strong></p>`;

    document.getElementById('output').innerHTML = output;
});
