var today = dayjs();
  $('#current-day').text(today.format('[Date: ] MMMM D, YYYY'));

// ADVICESLIP API
// Variables
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
        alert(`Error ${error}`);
    });
}