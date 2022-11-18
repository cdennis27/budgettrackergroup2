// DAYJS
var today = dayjs();
  $('#current-day').text(today.format('[Date: ] MMMM D, YYYY'));

// ADVICESLIP API
  // Variable
  const adviceText = document.querySelector(".tip-day");

  // Run the showQuote function when the page is loaded
  window.onload = showQuote;
  console.log();

  // showQuote function to show random quote from API
  function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
      console.log(data.slip);
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
      // Update this to MODAL!
        alert(`Error ${error}`);
    });
  }

// NBP WEB API  
  //Variable
  const USD = document.querySelector("#currency-output");

  // Run the showUSD function when the page is loaded
  window.onload = showUsd;

  // showUSD function to show USD rate from API
  function showUsd(){
  fetch("https://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json")
    .then(response => response.json())
    .then((data) => {
      USD.textContent = data.rates[0].ask;
  })};