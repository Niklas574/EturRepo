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
document.getElementById('buttonAddReport').addEventListener('click', function () {
    // Daten aus den Input-Feldern abrufen (ersetze dies durch deine eigenen Felder)
    let category = document.getElementById('reportCategory').value;
    let customerId = document.getElementById('reportCustomerId').value;
    let description = document.getElementById('reportDescription').value;

    // Daten für den HTTP-Aufruf vorbereiten 
    let requestData = {
        category: category,
        customerId: customerId,
        description: description
        // Füge hier weitere Felder hinzu, wenn nötig
    };

    // HTTP-Aufruf über Fetch API an den Server
    fetch('http://localhost:4040/reports', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Hinzufügen des Reports');
            }
            return response.json();
        })
        .then(data => {
            // Erfolgreiche Antwort verarbeiten
            console.log('Report erfolgreich erstellt:', data);

            // Anzeige der Reports in der Tabelle aktualisieren
            displayReportInTable(data);

            // Zurücksetzen der Eingabefelder (ersetze dies durch deine eigenen Felder)
            resetInputFields(['category', 'customerId', 'description']);
        })
        .catch(error => {
            // Fehler verarbeiten
            console.error('Fehler beim Hinzufügen des Reports:', error);
        });
});

// Funktion zum Zurücksetzen der Eingabefelder
function resetInputFields(fieldIds) {
    fieldIds.forEach(id => {
        document.getElementById(id).value = '';
    });
}