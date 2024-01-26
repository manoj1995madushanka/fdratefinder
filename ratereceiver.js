const daysPackages = [
    {
        "id": 1,
        "bankName": "Sampath Bank",
        "daysPackages": [
            {
                "name": "100 Days",
                "dayCount": 100,
                "minAmount": 1000000,
                "interestRatePerAnnual": 9
            },
            {
                "name": "200 Days",
                "dayCount": 200,
                "minAmount": 1000000,
                "interestRatePerAnnual": 10.0
            },
            {
                "name": "300 Days",
                "dayCount": 300,
                "minAmount": 1000000,
                "interestRatePerAnnual": 10.0
            }
        ]
    }
    // Add more banks if needed
];


document.getElementById('fdRate').addEventListener('click', async function () {
    // Retrieve selected bank value
    const selectedBankValue = document.querySelector('.form-select').value;
    console.log(selectedBankValue);

    // Read the json file
   /* const response = await fetch('data.json');

    if (!response.ok) {
        throw new Error(`Failed to fetch JSON file: ${response.statusText}`);
    }

    // Parse the JSON data
    const daysPackages = await response.json();*/

    // Find the bank data based on selected bank value
    //const selectedBank = daysPackages.find(bank => bank.id.toString() === selectedBankValue);

    const selectedBank = daysPackages.find(bank => bank.id.toString() === selectedBankValue);

    // Check if the bank is found
    if (selectedBank) {
        // Generate table HTML for daysPackages
        const tableHTML = `
      <table class="table">
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Days</th>
            <th>Minimum Amount</th>
            <th>Interest Rate (Annual)</th>
          </tr>
        </thead>
        <tbody>
          ${selectedBank.daysPackages.map(package => `
            <tr>
              <td>${package.name}</td>
              <td>${package.dayCount}</td>
              <td>${package.minAmount}</td>
              <td>${package.interestRatePerAnnual}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    `;

        // Append the table to the resultTable div
        document.getElementById('resultTable').innerHTML = tableHTML;
    } else {
        // If the bank is not found, display an error message or handle accordingly
        console.error('Selected bank not found');
    }
});