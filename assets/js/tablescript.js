const table2 = document.querySelector("#table")
var table = document.createElement("table");
//total = document.getElementById("balance")
const submitform = document.getElementById("form");
const payCheck = document.querySelector("paycheck");
const bonus = document.querySelector("bonus");
const incOthers = document.querySelector("incOthers");
const balanceFinal = document.querySelector("balance-amount");
let balance = 0;
var today = dayjs();
var currentDay = (today.format('DD-MMM-YYYY'));
const groceries = document.querySelector("groceries");
const entertainment = document.querySelector("entertainment");
const rent = document.querySelector("rent");
const fuel = document.querySelector("fuel");
const transport = document.querySelector("transport");
const utilities = document.querySelector("utilities");
const shopping = document.querySelector("shopping");
const education = document.querySelector("education");
const expOthers = document.querySelector("expOthers");
var budget = []

if (localStorage.getItem("budget")) {
    budget = JSON.parse(localStorage.getItem("budget"))
    var dateT = currentDay;

}
function expense(event) {
    event.preventDefault()
    
    amount = document.getElementById("amount").value;
    dateT = currentDay;
    category = document.getElementById("category").value;
    if (amount != Number) {
        $('#exampleModal3').foundation('open');
        return;
    }
    var expenseObj = {
        amount, dateT, category
    }
    budget.push(expenseObj)
    localStorage.setItem("budget", JSON.stringify(budget));
    console.log(table);
    table.innerHTML = "";
    $(table2).append(table);
    balance.innerHTML = 0;
    $('#balance-amount').text(balance);
    console.log(table);
    createTable();
    console.log(table);
}

submitform.addEventListener('submit', expense);

function createTable() {

    var headers = ["Category", "Date", "Amount"];
    balance = 0;

    for (var i = 0; i < budget.length; i++) {
        var row = table.insertRow(i);
        row.setAttribute("data-index", i);
        var indexi = ('"' + i + '"');
        console.log(indexi);
        var button3 = document.createElement("button");
        button3.textContent = "X";
        var currentAmount = (budget[i].amount);

        if (budget[i].category == "payCheck") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "bonus") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "incOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "food") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "groceries") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "entertainment") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "rent") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "fuel") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "transport") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "utilities") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "shopping") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "education") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "expOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount);
        }

        console.log("amount=" + (budget[i].amount));
        console.log("balance=" + balance);
        row.insertCell(1).innerHTML = (budget[i].category);
        row.insertCell(2).innerHTML = (budget[i].dateT);
        row.insertCell(3).innerHTML = ("Amount: CAD$");
        row.insertCell(4).innerHTML = (budget[i].amount);
        row.insertCell(5).innerHTML = ('<button class="deleteBtn" id="button4" type="button" onclick="deleteThis(event)">'
            + '<span> X </span></button>');
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for (var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).textContent = header[i];
    }

    table.deleteRow(0);
    console.log(table);
    $(table2).append(table);
    $('#balance-amount').text(balance);

}

function deleteThis(event) {

    var btnClicked = $(event.currentTarget).parent('td').parent('tr').attr('data-index');
    console.log(btnClicked);
    var element = event.target;

    if (element.matches("span") === true) {

        budget.splice(btnClicked, 1);
        console.log("Hello World" + budget);
        //
        localStorage.setItem("budget", JSON.stringify(budget));
        //$(table2).append(table);
        console.log(table);
        table.innerHTML = "";
        $(table2).append(table);
        balance = 0;
        $('#balance-amount').text(balance);
        console.log(table);
        createTable();
        console.log(table);
    }
    //const button1 = document.getElementById("button1");
    //   $(button1).on("click", renderTable());
}

createTable();

/*
////////////
// select if the key is income or expense
// create an income array with category as Income - pay check, Income Bonus, Income others
// create an expenes array with other categories
// have amount values of income array => add them
// have amount values of expense array => subtract them
if ((budget.category === payCheck) || (budget.category === bonus) || (budget.category === incOthers)) {
    var income= [];
    income.push(budget);
    console.log(Object.value(income));
}
else{
    var expense = [];
    expense.push(budget);
    console.log(Object.values(expense));
}
//////////////
/*
    var income = [(Income - Pay Check),  ]
    if(budget.category === (Income - Pay Check), || (Income - Bonus), || (Income - Others) ) {
        total === parseFloat(budget.a)
    }
}
createTable()
// if category: Income - Pay Check, Income - Bonus, Income - Others, then add in total
// else subtract from total
/*
var table = `<tr>
            <td>${amountId}</td>
            <td>${categoryId}</td>
        <tr>`;
    	
document.getElementById(table).innerHTML += table;
}
/*
function generateTable() {
    console.log("hello");
    <table id = "expense">
        <tr> 
            <th></th>
            <th></th>
        </tr>
    </table>
    // creates a <table> element and a <tbody> element
    var list1 = [];
    var list2 = [];
    var n = 1;
    var x = 0;
    function AddRow(){
        var AddRown = document.getElementById("expense");
        var NewRow = AddRow.insertRow();
        list1[x] = document.getElementById("amount").val;
        list2[x] = document.getElementById("category").val;
        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
    	
        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
    	
        n++;
        x++;
    }
}
generateTable();
document.getElementById("submit").onclick=function()
{
    document.getElementById("tabletext").style.display="block";
	
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var amount = row.insertCell(0);
    var category = row.insertCell(1);
	
    amount.innerHTML = document.getElementById("amount").value;
    category.innerHTML = document.getElementById("category").value;
	
    return false;
}
	
function generateTable(event) {
    event.preventDefault();
    const tbl = document.createElement("table");
    const tblbody = document.createElement("tbody");
    button.onclick = function () {
        count++;
        var numberofclicks = count
    	
	
    for(let i = 0; i < numberofclicks; i++){
        const row = document.createElement("tr");
        for (let j = 0; j<2; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode()
        }
    }
}
}
	
*/