// 1. Initial queue with at least 5 tickets
let tickets = [
    { id: "T101", priority: "HIGH", resolved: false },
    { id: "T102", priority: "MEDIUM", resolved: true },
    { id: "T103", priority: "LOW", resolved: false },
    { id: "T104", priority: "HIGH", resolved: false },
    { id: "T105", priority: "LOW", resolved: true }
];

// 2. Add urgent ticket to the front
tickets.unshift({ id: "T100", priority: "HIGH", resolved: false });

// 3. Add two normal tickets to the end
tickets.push(
    { id: "T106", priority: "MEDIUM", resolved: false },
    { id: "T107", priority: "LOW", resolved: false }
);

// 4. Remove first ticket to process
let currentTicket = tickets.shift();

// 5. Remove last ticket (duplicate)
let droppedTicket = tickets.pop();

// 6. Build pending array (only unresolved)
let pending = tickets.filter(function(ticket) {
    return ticket.resolved === false;
});

// 7. Build array of pending ticket IDs
let pendingIds = pending.map(function(ticket) {
    return ticket.id;
});

// 8. Print results
console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending IDs:", pendingIds);