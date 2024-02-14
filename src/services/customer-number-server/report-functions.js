const report1 = {
  id: '2412',
  category: "Feedback",
  customerId: "1234",
  description: "This is a description",
  labels: ["label1", "label2"],
  owner: "Product Manager",
  assignedTo: "Jens Reiner",
  createdAt: "2020-01-01:12:00:00",
  editedAt: "2020-01-01:12:00:00",
  closedAt: "2020-01-01:12:00:00",
  state: "Open",
  priority: 1,
  comments: [
    {
      author: "Jens Reiner",
      message: "This is a comment",
      createdAt: "2020-01-01:12:00:00",
      type: 'developer',
    },
  ],
  closeReason: "This is a close reason",
  references: [
    {
      type: "github",
      url: "",
      issueNumber: 1
    }
  ]
};


const reports = [report1];

function createReport(newReport) {
  reports.push(newReport);
}

export async function PostReport (fastify, options) {
  fastify.post('/reports', async (request, reply) => {
    const newReport = request.body;
    await createReport(newReport);
    return newReport;
  });
}

export async function GetReports (fastify, options) {
  fastify.get('/reports', async (request, reply) => {
    return reports;
  });
}
  
// function updateReport(report, updatedData) {
//   // Implementiere die Logik zur Aktualisierung eines Reports
//   const updatedReport = { ...report, ...updatedData };
//   return updatedReport;
// }

// Weitere Funktionen nach Bedarf

export { createReport};
