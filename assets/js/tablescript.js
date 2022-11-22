
total = document.getElementById("balance")
submitform = document.getElementById("form");
var budget = []
if(localStorage.getItem("budget")){
	budget = JSON.parse(localStorage.getItem("budget"))


}
function expense(event){
	event.preventDefault()
	amount = document.getElementById("amount").value;
	category = document.getElementById("category").value;
	var expenseObj = {
		amount, category
	
	} 
	budget.push(expenseObj)
	localStorage.setItem("budget", JSON.stringify(budget));

	
}
submitform.addEventListener('submit', expense) ;


function createTable() {
	var headers = ["Category", "Amount"];
	var table = document.createElement("table");

	for(var i= 0; i < budget.length; i++) {
		var row = table.insertRow(i);

		var button = document.createElement("button");
		button.textContent = "Cancel X";

		row.insertCell(0).innerHTML = budget[i].category;
		row.insertCell(1).innerHTML = budget[i].amount;
		row.insertCell(2).innerHTML = button;
		}
		
		var header = table.createTHead();
		var headerRow = header.insertRow(0);
		for (var i=0; i < headers.length; i++){
			headerRow.insertCell(i).innerHTML = header[i];
		}

		document.body.append(table);

	}

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

