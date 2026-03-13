// Payroll records
let employees = [
    { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "Ravi", basePay: 25000, bonus: 1500, taxRate: 0.08 },
    { name: "Neha", basePay: -20000, bonus: 1000, taxRate: 0.1 },   // invalid
    { name: "Kiran", basePay: 40000, bonus: 3000, taxRate: 0.15 },
    { name: "Maya", basePay: 28000, bonus: -500, taxRate: 0.05 }    // invalid
];

// 1. Filter valid records
let validRecords = employees.filter(function(emp) {
    return emp.basePay > 0 &&
           emp.bonus >= 0 &&
           emp.taxRate >= 0 &&
           emp.taxRate <= 1;
});

// 2. Create netPayReport
let netPayReport = validRecords.map(function(emp) {
    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);

    return {
        name: emp.name,
        netPay: netPay
    };
});

// 3. Calculate totalNetPayout
let totalNetPayout = netPayReport.reduce(function(sum, emp) {
    return sum + emp.netPay;
}, 0);

// 4. Print results
console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);