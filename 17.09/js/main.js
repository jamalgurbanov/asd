let myForm =  document.querySelector( "form");
myForm.addEventListener("submit", function (e){
    e.preventDefault();
})
let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let emailInput = document.querySelector("input[name='email']");

emailInput.nodeValue.match(regexEmail);