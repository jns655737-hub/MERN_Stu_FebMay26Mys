function auditReport(reportJSON) {

    
    let report = JSON.parse(reportJSON);

    let okCount = 0;
    let failCount = 0;

    for (let key in report.modules) {

        if (report.modules[key] === "OK") {
            okCount++;
        }

        if (report.modules[key] === "FAIL") {
            failCount++;
            break; 
        }
    }

    
    let summary = {
        okCount: okCount,
        failCount: failCount
    };

    return {
        summary: summary,
        summaryJSON: JSON.stringify(summary)
    };
}

let reportJSON = `{"app": "Portal","status": "OK","modules": {"auth": "OK","payment": "OK","results": "FAIL","profile": "OK"}}`;

console.log(auditReport(reportJSON));