// statement.js

document.addEventListener('DOMContentLoaded', function() {
    const transactionHistoryTable = document.getElementById('transaction-history-table');

    // Example transaction data (for demonstration)
    const transactions = [
        { date: "2024-06-10", description: "Salary", type: "Deposit", amount: "$2,000.00" },
        { date: "2024-06-08", description: "Grocery Store", type: "Withdrawal", amount: "$150.00" },
        { date: "2024-06-07", description: "Electric Bill", type: "Withdrawal", amount: "$100.00" },
        { date: "2024-06-05", description: "Transfer to Savings", type: "Transfer", amount: "$500.00" }
    ];

    // Function to update transaction history table
    function updateTransactionHistory(filteredTransactions) {
        const tbody = transactionHistoryTable.querySelector('tbody');
        tbody.innerHTML = '';

        filteredTransactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Initial load of transaction history
    updateTransactionHistory(transactions);

    // Filter transactions based on form input
    window.filterTransactions = function() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const transactionType = document.getElementById('transaction-type').value;

        let filteredTransactions = transactions;

        if (startDate) {
            filteredTransactions = filteredTransactions.filter(t => new Date(t.date) >= new Date(startDate));
        }
        if (endDate) {
            filteredTransactions = filteredTransactions.filter(t => new Date(t.date) <= new Date(endDate));
        }
        if (transactionType !== 'all') {
            filteredTransactions = filteredTransactions.filter(t => t.type.toLowerCase() === transactionType);
        }

        updateTransactionHistory(filteredTransactions);
    };

    // Download statement as a PDF
    window.downloadStatement = function() {
        // For simplicity, using window.print to generate a printable version
        // You might use a library like jsPDF for actual PDF generation
        window.print();
    };
});
