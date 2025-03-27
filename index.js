const birthDateInput = document.getElementById("birth_date")
const calculateAgeBtn = document.getElementById("calculate")
const output = document.getElementById("output")

function calculateAge(birthDateString){
  const today = new Date();
  const birthDate = new Date(birthDateString);


  const age = today.getFullYear()-birthDate.getFullYear();
  
  return age;
}

calculateAgeBtn.addEventListener("click", ()=>{
    const birthDate = birthDateInput.value;
    const age = calculateAge(birthDate);
    output.textContent = `Your age is : ${age}`;
});