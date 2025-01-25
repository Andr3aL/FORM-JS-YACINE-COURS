let myForm = document.querySelector("form");
// console.log(myForm);

let inputPseudo = document.getElementById("pseudo");
// console.log(inputPseudo);

let inputEmail = document.getElementById("email");
// console.log(inputEmail);

let inputPassword = document.getElementById("password");
// console.log(inputPassword);

let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
let regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.\d)(?=.*[#$^+=!*()@%&].{8,10})$/;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let valuePseudo = inputPseudo.value.trim();
  let lengthPseudo = valuePseudo.length;
  //   console.log(lengthPseudo);
  //   console.log(valuePseudo);
  let valueEmail = inputEmail.value.trim();
  //   console.log(valueEmail);
  let valuePassword = inputPassword.value.trim();
  //   console.log(valuePassword);

  // ********************
  //  TEST PSEUDO
  // *******************

  if (lengthPseudo < 4 || lengthPseudo > 15) {
    document.getElementById("pseudoError").classList.remove("d-none");
    document.querySelector("#pseudoError").classList.add("error");
    document.querySelector(".pseudoIcon").classList.remove("d-none");
    inputPseudo.classList.add("border-3", "border-danger");
    document.querySelector(".pseudoIcon").classList.add("text-danger");
  } else {
    inputPseudo.classList.add("border-3", "border-success");
    document.querySelector(".pseudoIcon").classList.remove("d-none");
    document.querySelector(".pseudoIcon").classList.replace("bi-x", "bi-check");
    document.querySelector(".pseudoIcon").classList.add("text-success");
  }

  // ********************
  //  TEST EMAIL
  // *******************

  if (!regexMail.test(valueEmail)) {
    document.getElementById("emailError").classList.remove("d-none");
    document.querySelector("#emailError").classList.add("error");
    document.querySelector(".emailIcon").classList.remove("d-none");
    inputEmail.classList.add("border-3", "border-danger");
    document.querySelector(".emailIcon").classList.add("text-danger");
  } else {
    inputEmail.classList.add("border-3", "border-success");
    document.querySelector(".emailIcon").classList.remove("d-none");
    document.querySelector(".emailIcon").classList.replace("bi-x", "bi-check");
    document.querySelector(".emailIcon").classList.add("text-success");
  }

  // ********************
  //  TEST PASSWORD
  // *******************
  if (!regexMdp.test(valuePassword)) {
    document.getElementById("passwordError").classList.remove("d-none");
    document.querySelector("#passwordError").classList.add("error");
    inputPassword.style.border = "4px solid red";
  }
});

let show = document.querySelector("#showIcon");

show.addEventListener("click", () => {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
    show.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPassword.type = "password";
    show.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});
