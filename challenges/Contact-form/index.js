let form = document.querySelector("form");
let subMessage = document.querySelector("dialog");
let queryRadio = document.querySelectorAll('input[name="query"]');
let generalQueryLabel = document.getElementById("generalQueryLabel");
let supportQueryLabel = document.getElementById("supportQueryLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  subMessage.showModal();
});

for (let radio of queryRadio) {
  radio.addEventListener("change", radioSelected);
}

function radioSelected(e) {
  if (this.checked) {
    if (this.id === "generalQuery") {
      generalQueryLabel.style.backgroundColor = "hsl(148, 38%, 91%)";
      supportQueryLabel.style.backgroundColor = "white";
    } else {
      supportQueryLabel.style.backgroundColor = "hsl(148, 38%, 91%)";
      generalQueryLabel.style.backgroundColor = "white";
    }
  }
}
