//Variables below
const table2 = document.querySelector("#table")
var table = document.createElement("table");
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
let amountLine = 0;

//Get local stored data
if (localStorage.getItem("budget")) {
    budget = JSON.parse(localStorage.getItem("budget"))
    var dateT = currentDay;
}

//Function to create local data based on User Input
function expense(event) {
    event.preventDefault()

    amount = document.getElementById("amount").value;
    dateT = currentDay;
    category = document.getElementById("category").value;
    if (amount == "") {
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
    amountEl.value = "";
}

submitform.addEventListener('submit', expense);


//Update screen with information from Local storage
function createTable() {

    var headers = ["Category", "Date", "Amount"];
    balance = 0;

    for (var i = 0; i < budget.length; i++) {
        var row = table.insertRow(i);
        row.setAttribute("data-index", i);
        // Below option to make whole line using background coded color from income or Expense.
        /*if ((budget[i].category == "payCheck") || (budget[i].category == "bonus") || (budget[i].category == "incOthers")) {
            row.setAttribute("data-index", i);
            row.setAttribute("class", "incomeBG");
        } 
        
        if ((budget[i].category != "payCheck") && (budget[i].category != "bonus") && (budget[i].category != "incOthers")) {
            row.setAttribute("data-index", i);
            row.setAttribute("class", "expenseBG");
        }*/
        
        var indexi = ('"' + i + '"');
        console.log(indexi);
        var button3 = document.createElement("button");
        button3.textContent = "X";
        var currentAmount = (budget[i].amount);

        if (budget[i].category == "payCheck") {
            row.insertCell(0).innerHTML = ('<img class="icon incomeBG" src="./assets/images/icons/i-payCheck.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "bonus") {
            row.insertCell(0).innerHTML = ('<img class="icon incomeBG" src="./assets/images/icons/i-bonus.png" alt="icon income bonus">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "incOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon incomeBG" src="./assets/images/icons/i-others.png" alt="icon income others">')
            balance = Number(balance) + Number(currentAmount);
        }
        if (budget[i].category == "food") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/i-food.png" alt="icon food">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "groceries") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/i-groceries.png" alt="icon groceries">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "entertainment") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/i-entertainment.png" alt="icon entertainment">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "rent") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/i-rent.png" alt="icon rent">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "fuel") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/gas-pump.png" alt="icon fuel">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "transport") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/bus.png" alt="icon transport">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "utilities") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/utilities.png" alt="icon utilities">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "shopping") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/online-shopping.png" alt="icon shopping">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "education") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/mortarboard.png" alt="icon education">')
            balance = Number(balance) - Number(currentAmount);
        }
        if (budget[i].category == "expOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon expenseBG" src="./assets/images/icons/expenses.png" alt="icon expense others">')
            balance = Number(balance) - Number(currentAmount);
        }

        let amountLine = Number(budget[i].amount);
        console.log("amount=" + (budget[i].amount));
        console.log("balance=" + balance);
        row.insertCell(1).innerHTML = (budget[i].category);
        row.insertCell(2).innerHTML = (budget[i].dateT);
        row.insertCell(3).innerHTML = ("Amount: CAD$" + amountLine.toFixed(2));
        row.insertCell(4).innerHTML = ("");
        row.insertCell(5).innerHTML = ('<button class="deleteBtn closeBtn button" id="button4" type="button" onclick="deleteThis(event)">'
            + '<span> X </span></button>');
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for (var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).textContent = header[i];
    }

    table.deleteRow(0);
    console.log(table);
    balance = (balance.toFixed(2));
    $(table2).append(table);
    $('#balance-amount').text(balance);

}

//Remove one item when delete button is clicked
function deleteThis(event) {

    var btnClicked = $(event.currentTarget).parent('td').parent('tr').attr('data-index');
    console.log(btnClicked);
    var element = event.target;

    if (element.matches("span") === true) {

        budget.splice(btnClicked, 1);
        console.log("Hello World" + budget);
        localStorage.setItem("budget", JSON.stringify(budget));
        console.log(table);
        table.innerHTML = "";
        $(table2).append(table);
        balance = 0;
        $('#balance-amount').text(balance);
        console.log(table);
        createTable();
        console.log(table);
    }

}

createTable();
