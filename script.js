let button = document.getElementById("submit");
let binary;
let result = document.createElement("h1");
result.className = "answer";

button.addEventListener("click", calc);


function calc(){
    binary = document.getElementById("binary").value;
    result.textContent = "The Result is: " + parseInt(binary, 2);
    document.body.appendChild(result);
    console.log('here');
}


