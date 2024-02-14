const report1 = {
  id: '2412',
  category: "Feedback",
  customerId: "ETUR-CN-34",
  description: "Alles läuft wie erwartet.",
  labels: ["Label1"],
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

const report2 = {
  id: '2413',
  category: "Bug",
  customerId: "ETUR-CN-21",
  description: "Es gibt einen Bug.",
  labels: ["Neu"],
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

const report3 = {
  id: '2414',
  category: "Feedback",
  customerId: "ETUR-CN-90",
  description: "Läuft gut.",
  labels: ["Geschlossen"],
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

const report4 = {
  id: '2415',
  category: "Bug",
  customerId: "ETUR-CN-111",
  description: "Bug beim Anlegen eines neuen Kontos.",
  labels: ["In Bearbeitung"],
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

const reports = [report1, report2, report3, report4];

function createReport(newReport) {
  reports.push(newReport);
}

export async function PostReport (fastify, options) {
  fastify.post('/reports', async (request, reply) => {
    let newReport = request.body;
    newReport.id = 1 + Math.floor(reports[reports.length -1].id);
    newReport.state = "Open";
    await createReport(newReport);
    return newReport;
  });
}

export async function GetReport (fastify, options) {
  fastify.get('/reports/:id', async (request, reply) => {
      const id = request.params.id;
      return reports[id];
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
