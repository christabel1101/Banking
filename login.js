document.addEventListener('DOMContentLoaded', function() {
    // Initialize Chart.js
    const ctx = document.getElementById('transactionChart').getContext('2d');
    const transactionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10/01/18', '10/02/18', '10/03/18', '10/04/18'],
            datasets: [
                {
                    label: 'Income',
                    data: [3000, 2000, 1000, 4000],
                    backgroundColor: 'green'
                },
                {
                    label: 'Expense',
                    data: [1000, 3000, 2000, 1000],
                    backgroundColor: 'red'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Filter function to update both chart and table
    window.filterData = function() {
        // Get filter dates
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        console.log('Filtering data from', startDate, 'to', endDate);

        // Filter chart data (example data updated)
        const filteredChartData = {
            labels: ['Filtered Date 1', 'Filtered Date 2'],
            datasets: [
                {
                    label: 'Income',
                    data: [2000, 1500],
                    backgroundColor: 'green'
                },
                {
                    label: 'Expense',
                    data: [1000, 800],
                    backgroundColor: 'red'
                }
            ]
        };
        transactionChart.data = filteredChartData;
        transactionChart.update();

        // Filter table data
        const tbody = document.querySelector('#transaction-table tbody');
        tbody.innerHTML = ''; // Clear existing rows

        // Example filtered transactions (replace with your actual filtering logic)
        const filteredTransactions = [
            { date: "10/05/24", details: "POS Purchase", amount: "$120.00" },
            { date: "11/10/24", details: "ATM Withdrawal", amount: "$250.00" }
        ];

        // Populate table with filtered data
        filteredTransactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.details}</td>
                <td>${transaction.amount}</td>
            `;
            tbody.appendChild(row);
        });
    };
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the sidebar
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('hidden');
            console.log('Sidebar toggled'); // Debug statement
        } else {
            console.error('Sidebar element not found'); // Error statement
        }
    }

    // Event listener for the hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleSidebar);
        console.log('Hamburger menu listener added'); // Debug statement
    } else {
        console.error('Hamburger menu element not found'); // Error statement
    }
});







