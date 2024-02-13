document.getElementById('button1').addEventListener('click', function() {
    debugger
    // Daten aus den Input-Feldern abrufen
    let customerName = document.getElementById('customerName').value;
    let customerAge = document.getElementById('customerAge').value;
    let customerEmail = document.getElementById('customerEmail').value;
    let customerPhoneNumber = document.getElementById('customerPhoneNumber').value;
    let customerNumber = document.getElementById('customerNumber').value;

    // Daten für den HTTP-Aufruf vorbereiten
    let requestData = {
        name: customerName,
        age: customerAge,
        email: customerEmail,
        phoneNumber: customerPhoneNumber,
        customerNumber: customerNumber
    };

    // HTTP-Aufruf über Fetch API an den Server
    fetch('/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Fehler beim Hinzufügen des Kunden');
        }
        return response.json();
    })
    .then(data => {
        // Erfolgreiche Antwort verarbeiten
        console.log('Kunde erfolgreich hinzugefügt:', data);
        // Hier könntest du weitere Aktionen ausführen, z.B. eine Bestätigungsmeldung anzeigen
    })
    .catch(error => {
        // Fehler verarbeiten
        console.error('Fehler beim Hinzufügen des Kunden:', error);
    });
});