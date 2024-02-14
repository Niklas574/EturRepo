debugger
document.getElementById('buttonLogin').addEventListener('click', function () {
    // Daten aus den Input-Feldern abrufen

    let customerNumber = document.getElementById('kundennummer').value;
    // Daten für den HTTP-Aufruf vorbereiten
    let requestData = {
        customerNumber: customerNumber
        
    };

    // HTTP-Aufruf über Fetch API an den Server
    fetch('http://localhost:4040/customers/:id/validate', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Kunde nicht gefunden.');
            }
            return response.json();
        })
        .then(data => {
            // Erfolgreiche Antwort verarbeiten
            console.log('Kunde gefunden.', data);

            window.location.href = "open-reports.html";
            

            // Zurücksetzen der Eingabefelder
            resetInputFields();
        })
        .catch(error => {
            // Fehler verarbeiten
            console.error('Fehler beim Hinzufügen des Kunden:', error);
        });
});