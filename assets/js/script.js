// VARIABLES
const submitButton = document.querySelector("#convert");
const adviceText = document.querySelector(".tip-day");
var i = -1;
var x = -1;
var today = dayjs();
// Variables for exchange box below
var exchangeRate = "usd";
var baseRate, optionRate, finalRate = 1;
const USD = document.querySelector("#currency-output");
USD.textContent = "choose your currency above";
var exH = document.getElementById('exchangeRate');
var exH2 = document.getElementById('exchangeRate2');
const CAD = document.querySelector("#cad-output");
var checkBoxUsd = document.getElementById("usd");
var checkBoxEur = document.getElementById("eur");
var checkBoxGbp = document.getElementById("gbp");
var amountCurrency = document.getElementById("amountcurr").value;
var amt = 0;
// Variables for input box below
const amountEl = document.querySelector("#amount");
const categoryEl = document.querySelector("#category");

// DAYJS
$('#current-day').text(today.format('[Date: ] MMMM D, YYYY'));
var currentDay = (today.format('YYYY-MM-DD'));
var yesterday = dayjs().add(-1, 'day');
var yesterday = (yesterday.format('YYYY-MM-DD'));
console.log(yesterday);
function dateExchange(currentDay, yesterday) {
  yesterday = dayjs().add(-1, 'day');
  yesterday = (yesterday.format('YYYY-MM-DD'));

}

// Run basic functions when the page is loaded
window.onload = showQuote()
window.onload = dateExchange();
window.onload = initializeExchange();


// Modal on page load


// ADVICESLIP API
function showQuote() {

  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => {
      console.log(data.slip);

      adviceText.textContent = data.slip.advice;

    })
    .catch((error) => {
      // alert(`Unable to display tip`);
      $('#exampleModal1').foundation('open');
    });
}

// Below functions to input box and table of income and expenses
/*
function submit() {
  console.log("Submitted!");
  var amount = amountEl.value;
  var category = categoryEl.value;
  if (amount > 0) {
    console.log("amount:" + amount + "and Category:" + category);
  } else {
    alert("You forgot amount!");
  }
}
*/
// below functions to show currency exchange rates from BNP API

var usdExchangeLink = ("https://api.nbp.pl/api/exchangerates/rates/c/" + "usd" + "/" + yesterday + "/?format=json");
var cadExchangeLink = ("https://api.nbp.pl/api/exchangerates/rates/c/" + "cad" + "/" + yesterday + "/?format=json");
var exchangeRate = "usd";

async function initializeExchange() {
  showExchangeCad();
  if (baseRate != undefined) {
    await sleep(2000);
    getRate();
  } else {
    showExchangeCad();
    await sleep(2000);
    getRate();
    //USD.textContent = "Choose your currency above.";
    USD.textContent = (finalRate.toFixed(4) + exchangeRate);
    console.log("Rate is in:" + exchangeRate);
    return;
  }
  console.log("Rate is in:" + exchangeRate);
}

function getRate() {
  
  if (checkBoxUsd.checked == true) {
    exchangeRate = "usd";
    showExchange();
    CAD.textContent = "Please convert."

  } else if (checkBoxEur.checked == true) {
    exchangeRate = "eur";
    showExchange();
    CAD.textContent = "Please convert."

  } else if (checkBoxGbp.checked == true) {
    exchangeRate = "gbp";
    showExchange();
    CAD.textContent = "Please convert."

  }
  else {
    return;
  }
  exH2.textContent = (" " + exchangeRate);
  exH.textContent = "";
  console.log(exchangeRate);
}

function showUsd() {
  fetch(usdExchangeLink)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      optionRate = data.rates[0].ask;
      console.log("baseRate:" + baseRate);
      finalRate = (optionRate / baseRate);
      console.log("finalRate:" + finalRate);
      USD.textContent = finalRate.toFixed(4);
    })
}

function showExchange() {
  usdExchangeLink = ("https://api.nbp.pl/api/exchangerates/rates/c/" + exchangeRate + "/" + yesterday + "/?format=json");
  console.log(usdExchangeLink);
  console.log("i:" + i);
  fetch(usdExchangeLink)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        return showUsd();
      } else if (response.status !== 200) {
        i--;
        console.log(i);
        yesterday = dayjs().add(i, 'day');
        yesterday = (yesterday.format('YYYY-MM-DD'));
        fetch(usdExchangeLink)
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              return showUsd();
            } else {
              if (i <= -7) {
                return USD.textContent = 1;
              }
              else { showExchange() }
            }

          });
      }
    });
  exH.textContent = "";
  exH2.textContent = (" " + exchangeRate);
  console.log(exchangeRate);
}

function showExchangeCad() {
  cadExchangeLink = ("https://api.nbp.pl/api/exchangerates/rates/c/cad/" + yesterday + "/?format=json");
  console.log(cadExchangeLink);
  console.log("x:" + x);
  fetch(cadExchangeLink)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        return showCad();
      } else if (response.status !== 200) {
        x--;
        console.log('x:' + x);
        yesterday = dayjs().add(x, 'day');
        yesterday = (yesterday.format('YYYY-MM-DD'));
        fetch(cadExchangeLink)
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              return showCad();
            } else {
              if (x <= -7) {
                return CAD.textContent = 1;
              }
              else {
                showExchangeCad()
              }
            }

          });
      }
    });
  console.log(CAD.textContent);
  console.log(exchangeRate);
}

function showCad() {
  fetch(cadExchangeLink)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      //CAD.textContent = data.rates[0].ask;
      CAD.textContent = "Please convert!";
      exH2.textContent = "";
      exH.textContent = "";
      baseRate = data.rates[0].ask;
      console.log("CAD:" + CAD.textContent);
      console.log("baseRate:" + baseRate);
    })
}
// Delay function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function convert(event) {
  event.preventDefault();

  getRate();
  var amountCurrency = document.getElementById("amountcurr").value;
  await sleep(2000);
  //debugger;
  console.log("finalRate is:" + finalRate);
  amt = amountCurrency;
  if (finalRate == 1) {
    $('#exampleModal2').foundation('open');
    CAD.textContent = "Sorry, please try again!";
    return;
  }

  if (amt > 0) {
    CAD.textContent = (amt * finalRate).toFixed(2);
  } else {
    $('#exampleModal2').foundation('open');
    CAD.textContent = "Sorry, please try again!";
    return;
  }
  console.log("amountCurrency:" + amt);
  amountEl.value = CAD.textContent;
  exH2.textContent = (" " + exchangeRate);
  exH.textContent = (" " + exchangeRate);
}