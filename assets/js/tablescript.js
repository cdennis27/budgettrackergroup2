const table2 = document.querySelector("#table")
var table = document.createElement("table");
//total = document.getElementById("balance")
const submitform = document.getElementById("form");
const payCheck = document.querySelector(".paycheck");
const bonus = document.querySelector(".bonus");
const incOthers = document.querySelector(".incOthers");
const balanceFinal = document.querySelector(".balance-amount");
let balance = 0;
var today = dayjs();
var currentDay = (today.format('DD-MMM-YYYY'));
const groceries = document.querySelector(".groceries");
const entertainment = document.querySelector(".entertainment");
const rent = document.querySelector(".rent");
const fuel = document.querySelector(".fuel");
const transport = document.querySelector(".transport");
const utilities = document.querySelector(".utilities");
const shopping = document.querySelector(".shopping");
const education = document.querySelector(".education");
const expOthers = document.querySelector(".expOthers");
var budget = [] //Creating an array named budget

if (localStorage.getItem("budget")) {
    budget = JSON.parse(localStorage.getItem("budget"))  // get element from local storage 
    //JSON.parse to convert string into java script object
    var dateT = currentDay;
    //get current date with MMM to use month as name and not number

}
function expense(event) {
    event.preventDefault() // To have the value when the page is refreshed

    amount = document.getElementById("amount").value; //Get value from Amount id in html filr
    dateT = currentDay;
    category = document.getElementById("category").value; //get value for category that was selected
    if (amount == "") {
        $('#exampleModal3').foundation('open'); //foundation modal
        return;
    }
    var expenseObj = {
        amount, dateT, category  //create an object which has amount, date, category as key
    }
    budget.push(expenseObj) //add object to budget array
    localStorage.setItem("budget", JSON.stringify(budget)); //to convert javascript object to string
    console.log(table); 
    table.innerHTML = "";
    $(table2).append(table); //setting table to table element on html file with id Table
    balance.innerHTML = 0; //With no data the balance is zero
    $('#balance-amount').text(balance);  // #balance-amount refering to id as on html file
    console.log(table);
    createTable(); //call to generate a table
    console.log(table);
    amountEl.value = CAD.textContent; //amount value is in CAD in script.js file
}

submitform.addEventListener('submit', expense); 

function createTable() {

    var headers = ["Category", "Date", "Amount"]; //table has 3 header namely: category, date and amount
    balance = 0; //initial balance is 0

    for (var i = 0; i < budget.length; i++) { //having a for loop for the number of objects in budget array
        var row = table.insertRow(i); //creating a dynamic row with function insertRow
        row.setAttribute("data-index", i);  //having an element named data-index as index of the row
        var indexi = ('"' + i + '"');
        console.log(indexi);
        var button3 = document.createElement("button");  //creating button with createElement("button") function
        button3.textContent = "X"; //having the contect value as X for button
        var currentAmount = (budget[i].amount); //variable with the amount in specific row
        // having if loop for the catergories in the table, to add income and subtract expenses
        // for each table entry we have also added the icon as first cell of the row as symbol in each row
        if (budget[i].category == "payCheck") { 
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount); //Adding amount if category is paycheck, number function converts from string to number
        }
        if (budget[i].category == "bonus") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount); //Adding amount if category is bonus
        }
        if (budget[i].category == "incOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) + Number(currentAmount); //Adding amount if category is incOther
        }
        if (budget[i].category == "food") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is food
        }
        if (budget[i].category == "groceries") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is groceries
        }
        if (budget[i].category == "entertainment") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is entertainment
        }
        if (budget[i].category == "rent") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is rent
        }
        if (budget[i].category == "fuel") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is fuel
        }
        if (budget[i].category == "transport") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is transport
        }
        if (budget[i].category == "utilities") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is utilities
        }
        if (budget[i].category == "shopping") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is shopping
        }
        if (budget[i].category == "education") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is education
        }
        if (budget[i].category == "expOthers") {
            row.insertCell(0).innerHTML = ('<img class="icon" src="./assets/images/paycheckicon.png" alt="icon pay check">')
            balance = Number(balance) - Number(currentAmount); //Subtracting amount if category is other expense
        }

        console.log("amount=" + (budget[i].amount)); //have amount of every row 
        console.log("balance=" + balance); //balance amount at balance id on html file
        row.insertCell(1).innerHTML = (budget[i].category); //second cell in row
        row.insertCell(2).innerHTML = (budget[i].dateT); //third cell in the row
        row.insertCell(3).innerHTML = ("Amount: CAD$");  //fourth 
        row.insertCell(4).innerHTML = (budget[i].amount);
        row.insertCell(5).innerHTML = ('<button class="deleteBtn" id="button4" type="button" onclick="deleteThis(event)">'
            + '<span> X </span></button>');
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0); 
    for (var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).textContent = header[i];
    }

    table.deleteRow(0); // To remove header row and start from the category and amount row
    console.log(table);
    balance = (balance.toFixed(2)); //to have 2 digits after decimals
    $(table2).append(table);
    $('#balance-amount').text(balance); //Will asign balance value to #balance-amount id

}

function deleteThis(event) {

    var btnClicked = $(event.currentTarget).parent('td').parent('tr').attr('data-index'); 
    //Here as to delete the row, we will first take the button as data, take the index and as row is parent we will delete the row.
    console.log(btnClicked); 
    var element = event.target; //here we have the selected button as target

    if (element.matches("span") === true) { //as button is in span id if it is selected then follow this function

        budget.splice(btnClicked, 1); //splice method remove array element(at button click remove 1 element)
        console.log("Hello World" + budget); 
        localStorage.setItem("budget", JSON.stringify(budget));  //convert object into a string
        console.log(table);
        table.innerHTML = ""; //have the row as empty row
        $(table2).append(table); //append table to table class on html file
        balance = 0; //balance for table value = 0 if the row is deleted
        $('#balance-amount').text(balance);
        console.log(table);
        createTable();
        console.log(table);
    }

}

createTable();