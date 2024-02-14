debugger
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
        console.log("done");
});