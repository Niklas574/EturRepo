debugger
document.addEventListener('DOMContentLoaded', function () {
    // Fetch existing customers from the server and populate the table
    fetch('http://localhost:4040/customers')
        .then(response => response.json())
        .then(data => {
            // Loop through existing customers and display them in the table
            data.forEach(customer => {
                displayCustomerInTable(customer);
            });
        })
        .catch(error => {
            console.error('Error fetching existing customers:', error);
        });
});

document.getElementById('button1').addEventListener('click', function () {
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
    fetch('http://localhost:4040/customers', {
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

            // Anzeige der Kunden in der Tabelle aktualisieren
            displayCustomerInTable(data);

            // Zurücksetzen der Eingabefelder
            resetInputFields();
        })
        .catch(error => {
            // Fehler verarbeiten
            console.error('Fehler beim Hinzufügen des Kunden:', error);
        });
});

document.getElementById('buttonDelete').addEventListener('click', function () {
    // Kundennummer zum Löschen aus dem Input-Feld abrufen
    let deleteCustomerNumber = document.getElementById('deleteCustomerNumber').value;

    // HTTP-Aufruf über Fetch API an den Server, um den Kunden zu löschen
    fetch(`http://localhost:4040/customers/${deleteCustomerNumber}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Löschen des Kunden');
            }
            return response.text();
        })
        .then(data => {
            // Erfolgreiche Antwort verarbeiten
            console.log('Kunde erfolgreich gelöscht:', data);

            // Tabelle aktualisieren, um den gelöschten Kunden zu entfernen
            removeCustomerFromTable(deleteCustomerNumber);

            // Zurücksetzen des Eingabefelds
            document.getElementById('deleteCustomerNumber').value = '';
        })
        .catch(error => {
            // Fehler verarbeiten
            console.error('Fehler beim Löschen des Kunden:', error);
        });
});

// Funktion zum Anzeigen eines Kunden in der Tabelle
function displayCustomerInTable(customer) {
    const tableBody = document.getElementById('customerTableBody');

    // Erstelle ein tr-Element für die Kundenzeile
    const row = document.createElement('tr');

    // Fülle die Zeile mit Informationen
    row.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.age}</td>
        <td>${customer.email}</td>
        <td>${customer.phoneNumber}</td>
        <td>${customer.customerNumber}</td>
    `;

    // Füge die Zeile zur Tabelle hinzu
    tableBody.appendChild(row);
}

// Funktion zum Entfernen eines Kunden aus der Tabelle
function removeCustomerFromTable(customerNumber) {
    const tableBody = document.getElementById('customerTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    // Durchsuche die Tabelle nach der Zeile mit der angegebenen Kundennummer und entferne sie
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length > 0 && cells[4].innerText === customerNumber) {
            tableBody.removeChild(rows[i]);
            break;
        }
    }
}

// Funktion zum Zurücksetzen der Eingabefelder
function resetInputFields() {
    document.getElementById('customerName').value = '';
    document.getElementById('customerAge').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhoneNumber').value = '';
    document.getElementById('customerNumber').value = '';
}

