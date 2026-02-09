//include it here all the id's

const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output");

//query selector
const description = document.querySelector(".description");
const button = document.querySelector("#btnClick");


//event handler
button.addEventListener("click", function() {
    let name = nameInput.value;
    let age = ageInput.value;
    button.textContent = "Clicked!";

    output.innerHTML = "<p class='msg success'> Button was clicked! </p>";

    //loose equality
    if(age == 18){
        output.innerHTML += "<p class='msg info'> You are 18 years old!</p>";
    }
    else {
        output.innerHTML += "<p class='msg error'> You are not 18 years old!</p>";
    }

    //strict equality
    if(age === "18"){
        output.innerHTML += "<p class='msg info'> You are 18 years old! (STRICT)</p>";
    }
    else {
        output.innerHTML += "<p class='msg error'> You are not 18 years old! (STRICT)</p>";
    }
    
    if(name != "") {
        output.innerHTML += "<p class='msg greeting'> Hello, " + name + "! I am " + age + " years old! </p>";
    }
    else {
        output.innerHTML += "<p class='msg error'> Please enter your name! </p>";
    }
});