const table2 = document.querySelector("#table")
var table = document.createElement("table");
//table.classList = "table"
total = document.getElementById("balance-amount")
submitform = document.getElementById("form");
payCheck = document.querySelector(".paycheck");
bonus = document.querySelector(".bonus");
incOthers = document.querySelector(".incOthers");
var today = dayjs();
var currentDay = (today.format('DD-MMM-YYYY'));
groceries = document.querySelector(".groceries");
entertainment = document.querySelector(".entertainment");
rent = document.querySelector(".rent");
fuel = document.querySelector(".fuel");
transport = document.querySelector(".transport");
utilities = document.querySelector(".utilities");
shopping = document.querySelector(".shopping");
education = document.querySelector(".education");
expOthers = document.querySelector(".expOthers");


var budget = []
if (localStorage.getItem("budget")) {
    budget = JSON.parse(localStorage.getItem("budget"))
}


function calculateTotal(category, budget){
    let sum = 0;
    console.log(budget);
    budget.forEach(element => {
        if(element.category == "payCheck"){
            sum += entry.amount
        }
        else if(element.category == "bonus"){
            sum += entry.amount;
        }
        else if(element.category == "incOthers"){
            sum += entry.amount;
        }
        else if(element.category == "groceries"){
            sum -= entry.amount;
        }
        else if(element.category == "entertainment"){
            sum -= entry.amount;
        }
        else if(element.category == "rent"){
            sum -= entry.amount;
        }
        else if(element.category == "transport"){
            sum -= entry.amount;
        }
        else if(element.category == "utilities"){
            sum -= entry.amount;
        }
        else if(element.category == "shopping"){
            sum -= entry.amount;
        }

        }
       
)};
       
   
    calculateTotal(category, budget);

   
function expense(event) {
    event.preventDefault()
    amount = parseFloat(document.getElementById("amount").value);
    category = document.getElementById("category").value;
    var expenseObj = {
        amount, category
    }
    budget.push(expenseObj)
    localStorage.setItem("budget", JSON.stringify(budget));
    //$(table2).append(table);
    //console.log(table);
    //table.innerHTML = "";
    $(table2).append(table);
   // console.log(table);
    createTable();
   // console.log(table);
}
submitform.addEventListener('submit', expense);
function createTable() {
    var headers = ["Category", "Amount"];
	const button = document.createElement("button").value = "x";;
	////button.innerHTML = "x";	
	//button.className = "deleteBtn";
	//table.appendChild(button);
    //var table = document.createElement("table");
	table.setAttribute("data-index", i);
    for (var i = 0; i < budget.length; i++) {
        var row = table.insertRow(i);
        
		table.setAttribute("data-index", i);
        //button.textContent = "X";
        //button.setAttribute("data-index", i);
        row.insertCell(0).innerHTML = budget[i].category;
        row.insertCell(1).innerHTML = currentDay;
        row.insertCell(2).innerHTML = budget[i].amount;
        row.insertCell(3).innerHTML = button;
    }
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for (var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = header[i];
    }
    table.deleteRow(0);
    console.log(table);
	
}

	table.addEventListener("click", function(event) {
    var element =  event.target;
    if (element.matches("button") === true){
		var index = element.parentElement.getAttribute("data-index");
		table.deleteRow($(this));
		}
	});

    
    