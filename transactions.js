document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transaction-form');
    const transactionHistoryTable = document.getElementById('transaction-history-table');

    let transactions = [
        { date: "2024-06-15", type: "Deposit", amount: "$100.00", recipient: "Personal Account" },
        { date: "2024-06-14", type: "Withdrawal", amount: "$50.00", recipient: "ATM" }
    ];

    function updateTransactionHistory() {
        const tbody = transactionHistoryTable.querySelector('tbody');
        tbody.innerHTML = ''; // Clear existing rows

        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.recipient}</td>
            `;
            tbody.appendChild(row);
        });
    }

    updateTransactionHistory();

    window.updateFormFields = function() {
        const formFieldsContainer = document.getElementById('form-fields');
        const transactionType = document.getElementById('transaction-type').value;

        formFieldsContainer.innerHTML = ''; // Clear existing fields

        const amountField = `
            <label for="amount">Amount</label>
            <input type="text" id="amount" name="amount" required>
        `;
        formFieldsContainer.innerHTML += amountField;

        if (transactionType === 'deposit') {
            formFieldsContainer.innerHTML += `
                <label for="account">To Account</label>
            <select id="transaction-type" name="transaction-type">
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="transfer">Transfer</option>
            </select>
            `;
        } else if (transactionType === 'withdrawal') {
            formFieldsContainer.innerHTML += `
            <label for="account">From Account</label>
            <select id="transaction-type" name="transaction-type">
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="transfer">Transfer</option>
            </select>
            `;
        } else if (transactionType === 'transfer') {
            formFieldsContainer.innerHTML += `
            <label for="account">From Account</label>
            <select id="transaction-type" name="transaction-type">
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="transfer">Transfer</option>
            </select>
                <label for="to-account">To Account</label>
                <input type="text" id="to-account" name="to-account" required>
            `;
        }
    };

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const transactionType = document.getElementById('transaction-type').value;
        const amount = document.getElementById('amount').value;
        const recipient = document.getElementById('account') ? document.getElementById('account').value : document.getElementById('to-account').value;
        const date = new Date().toLocaleDateString();

        const newTransaction = {
            date: date,
            type: transactionType,
            amount: `$${parseFloat(amount).toFixed(2)}`,
            recipient: recipient
        };

        transactions.unshift(newTransaction); // Add to the beginning of the array

        updateTransactionHistory();
        transactionForm.reset();
        updateFormFields();
    });

    updateFormFields(); // Initialize form fields
});
