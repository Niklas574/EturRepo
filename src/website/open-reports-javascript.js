document.addEventListener('DOMContentLoaded', function () {
    // Fetch existing reports from the server and populate the table
    fetch('http://localhost:4040/reports')
        .then(response => response.json())
        .then(data => {
            // Loop through existing reports and display them in the table
            data.forEach(report => {
                displayReportInTable(report);
            });
        })
        .catch(error => {
            console.error('Error fetching existing reports:', error);
        });
});

// Funktion zum Anzeigen eines Reports in der Tabelle
function displayReportInTable(report) {
    const tableBody = document.getElementById('reportTableBody');

    // Erstelle ein tr-Element für die Reportzeile
    const row = document.createElement('tr');

    // Fülle die Zeile mit Informationen
    row.innerHTML = `
        <td>${report.id}</td>
        <td>${report.category}</td>
        <td>${report.customerId}</td>
        <td>${report.description}</td>
        <td>${report.labels}</td>
        <!-- Füge hier weitere Spalten hinzu, wenn nötig -->
    `;

    // Füge die Zeile zur Tabelle hinzu
    tableBody.appendChild(row);
}


// Funktion zum Zurücksetzen der Eingabefelder
function resetInputFields(fieldIds) {
    fieldIds.forEach(id => {
        document.getElementById(id).value = '';
    });
}