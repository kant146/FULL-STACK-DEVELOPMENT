// fill in javascript code here

document.querySelector("form").addEventListener("submit",masai);

function masai(event){
event.preventDefault();
let employee_name=document.querySelector("#name").value;
let employee_ID=document.querySelector("#employeeID").value;
let department=document.querySelector("#department").value;
let experience =document.querySelector("#exp").value;
let email=document.querySelector("#email").value;
let number=document.querySelector("#mbl").value;

displayTable(employee_name,employee_ID,department,experience,email,number)
}

function displayTable(employee_name,employee_ID,department,experience,email,number){
  
let row = document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=employee_name;
let td2=document.createElement("td");
td2.innerText=employee_ID;
let td3=document.createElement("td");
td3.innerText=department;
let td4=document.createElement("td");
td4.innerText=experience;

let td5=document.createElement("td");
td5.innerText=email;
let td6=document.createElement("td");
td6.innerText=number;
let td7=document.createElement("td");
if(experience>=5){
  td7.innerText="Senior";
}
else if(experience>=2 && experience<5){
  td7.innerText="Junior";
}
else if(experience<=1){
  td7.innerText="Fresher"
}
let td8=document.createElement("td");
 td8.innerText="Delete";
 td8.style.background="red";
 td8.style.color="white";
 td8.style.cursor="pointer";
 td8.addEventListener("click", mydelete);
 row.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(row);
console.log(document.querySelector("tbody").append(row));


}

function mydelete(dlt){
  dlt.target.parentNode.remove()
}

function dark(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}
