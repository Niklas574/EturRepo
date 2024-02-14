// reportFunctions.js
import reportModel from './reportModel';

function createReport() {
  // Implementiere die Logik zur Erstellung eines neuen Reports
  const newReport = {
    id: generateUniqueId(), // Annahme: Funktion zum Generieren einer eindeutigen ID
    category: "Feedback",
    customerId: "1234",
    description: "",
    labels: [],
    owner: "",
    assignedTo: "",
    createdAt: getCurrentDateTime(), // Annahme: Funktion für das aktuelle Datum und die Uhrzeit
    editedAt: "",
    closedAt: "",
    state: "Open",
    priority: 1,
    comments: [],
    closeReason: "",
    references: [],
  };
  return newReport;
}

function updateReport(report, updatedData) {
  // Implementiere die Logik zur Aktualisierung eines Reports
  const updatedReport = { ...report, ...updatedData };
  return updatedReport;
}

// Weitere Funktionen nach Bedarf...

export { createReport, updateReport };
