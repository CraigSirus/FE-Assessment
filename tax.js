var userName = prompt("Hello, please enter your name!");
console.log("Thank you for taking the time to look at my assessment and I look forward to hearing from you. Regards, Craig Beyer");
document.getElementById("username").innerHTML= userName;
tax = (LumpSumInvestmentAmount, LumpSumInvestmentMonth, debitOrderStartMonth, debitOrderAmount) => {
    //Total fixed amounts
    var total = 30000;
    var debitOrderAmount = 2500;
    var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var financialYear = ["February", "January", "December", "November", "October", "September", "August", "July", "June", "May", "April", "March"];
    var LumpSumInvestmentAmount = document.getElementById("lumpsumInvestment").value;
    if (LumpSumInvestmentAmount > total) {
        alert("Tax free contribution cannot exceed R30000 limit in any given tax year!");
        return;
    }
    else if (parseFloat(LumpSumInvestmentAmount) === total) {
        alert("Total has been reached for the given tax year, no debit order needed");
        return;
    };

    var getUserSelectionMonth = document.getElementById("userMonth");
    var LumpSumInvestmentMonth = getUserSelectionMonth.options[getUserSelectionMonth.selectedIndex].text;
    var arrayIndexOfMonth = months.indexOf(LumpSumInvestmentMonth) +1;
    var EarliestPermissibleDebitOrderStartMonth = (total - LumpSumInvestmentAmount) / debitOrderAmount;
    var debitOrderStartMonth = EarliestPermissibleDebitOrderStartMonth;
    var monthsLeftinYear = ((12 - arrayIndexOfMonth) +2);
    if (arrayIndexOfMonth === 1) {
        var january = 2500 * 1 + parseFloat(LumpSumInvestmentAmount);
        document.getElementById("debitOrderStartMonth").innerHTML= "Your debit order will start in February";
        document.getElementById("totalContribution").innerHTML= "Total contributions paid: R " +january;
    }
    else if (arrayIndexOfMonth === 2) {
        var february = 2500 * 0 + parseFloat(LumpSumInvestmentAmount);
        document.getElementById("debitOrderStartMonth").innerHTML="Your debit order will start in March";
        document.getElementById("totalContribution").innerHTML= "Total contributions paid: R " +february;
    }
    else if (monthsLeftinYear > EarliestPermissibleDebitOrderStartMonth){
        var TotalContributions = (parseFloat(EarliestPermissibleDebitOrderStartMonth) * 2500 + (parseFloat(LumpSumInvestmentAmount)));
        document.getElementById("totalContribution").innerHTML="Total contributions paid: R " + TotalContributions;
        document.getElementById("debitOrderStartMonth").innerHTML= "Your debit order will start in " +financialYear[EarliestPermissibleDebitOrderStartMonth -1];
    } else {
        var TotalContributions = (parseFloat(monthsLeftinYear) * 2500 + (parseFloat(LumpSumInvestmentAmount)));
        document.getElementById("totalContribution").innerHTML="Total contributions paid: R " + TotalContributions;
        document.getElementById("debitOrderStartMonth").innerHTML= "Your debit order will start in " +financialYear[monthsLeftinYear -1];
        }

        event.preventDefault();

}

tax();