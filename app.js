const btn = document.querySelector(".button");
const errors = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input");
const inputsArray = Array.from(inputs);
const errorsArray = Array.from(errors);


const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");


const dayOutput = document.querySelector(".res-days");
const monthOutput = document.querySelector(".res-months");
const yearOutput = document.querySelector(".res-years");

let wrongValidation;
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


preventWrongNumbers();

function preventWrongNumbers() {
  dayInput.addEventListener("input", () => {
    if (dayInput.value.length > 2) {
      dayInput.value = dayInput.value.slice(0, 2);
    } else if (dayInput.value.length < 1) {
      errorsArray[0].innerHTML = "This cannot be empty";
    } else if (dayInput.value > 31 || dayInput.value < 1) {
      errorsArray[0].innerHTML = "Not valid number";
    } else {
      errorsArray[0].innerHTML = "";
    }
    checkCorrectValidation(); 
  });

  monthInput.addEventListener("input", () => {
    if (monthInput.value.length > 2) {
      monthInput.value = monthInput.value.slice(0, 2);
    } else if (monthInput.value.length < 1) {
      errorsArray[1].innerHTML = "This cannot be empty";
    } else if (monthInput.value > 12 || monthInput.value < 1) {
      errorsArray[1].innerHTML = "Not valid number";
    } else {
      errorsArray[1].innerHTML = "";
    }
    checkCorrectValidation(); 
  });

  yearInput.addEventListener("input", () => {
    if (yearInput.value.length > 4) {
      yearInput.value = yearInput.value.slice(0, 4);
    } else if (yearInput.value.length < 1) {
      errorsArray[2].innerHTML = "This cannot be empty";
    } else if (yearInput.value > 2023 || yearInput.value < 1000) {
      errorsArray[2].innerHTML = "Not valid number";
    } else {
      errorsArray[2].innerHTML = "";
    }
    checkCorrectValidation(); 
  });
}

function checkCorrectValidation() {
  errorsArray.some(error =>{
    if(error.innerHTML === ""){
      wrongValidation = true
    }else{
      wrongValidation = false
    }
  })
}


function calculateDifference(){
  let yearInputValue = yearInput.value
  let monthInputValue = monthInput.value - 1
  let dayInputValue = dayInput.value
  let currentDate = new Date
  let compareDate = new Date(yearInputValue,monthInputValue,dayInputValue)

  let day = currentDate.getDate()
  let month = currentDate.getMonth()
  let year = currentDate.getFullYear()

  if (dayInputValue > day) {
    day = day + months[monthInputValue - 1];
    month = month - 1;
  }
  if (monthInputValue > month) {
    month = month + 12;
    year = year - 1;
  }
  if(compareDate > currentDate){
    alert("Compared date has to be younger than current date")
    return
  }


  const d = day - dayInputValue;
  const m = month - monthInputValue;
  const y = year - yearInputValue;

  dayOutput.innerHTML = d;
  monthOutput.innerHTML = m;
  yearOutput.innerHTML = y;
}

btn.addEventListener("click", () => {
  if (wrongValidation === true) {
    calculateDifference()
  }else{
    alert("Enter valid data")
  }
});
