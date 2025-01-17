// alert("Hello !");

let myForm = document.querySelector("form");

// console.log(myForm);

let inputPseudo = document.querySelector("#pseudo");

// console.log(inputPseudo);

let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");

// console.log(inputEmail);
// console.log(inputPassword);

myForm.addEventListener("submit", function(event){
    event.preventDefault();

    console.log(event.target[0].value);
    // pareil que 
    // console.log(inputPseudo.value);
    
    
    


    let valuePseudo = inputPseudo.value.trim();
    // .trim() fait en sorte que : si l'utilisateur entre des espaces avant ou après le mot saisi, ces derniers soient ignorés par l'ordinateur
    // console.log(valuePseudo.length); 

    // la taille de la valeur du champ pseudo
    let lengthPseudo = valuePseudo.length;

    // on écrit qqchose dans pseudo, on tape sur entrer, et on voit que dans la console , le mot tapé est récupéré.

    let valueEmail = inputEmail.value.trim();
    // console.log(valueEmail);

    let valuePassword = inputPassword.value.trim();
    // console.log(valuePassword);


    let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.\d)(?=.*[#$^+=!*()@%&].{8,10})$/;



    // ********** On traite le pseudo ici *************


    if(lengthPseudo < 5 || lengthPseudo > 15) {

        // quand il y a une erreur, on enlève la classe d-none du p qui dit "veuillez entrer un pseudo valide" par exemple
        document.querySelector("#pseudoError").classList.remove("d-none");
        // Dans le même temps, on ajoute au p la classe error
        document.querySelector("#pseudoError").classList.add("error");
        //
        document.querySelector(".iconePseudo").classList.remove("d-none");
        document.querySelector(".iconePseudo").style.color="red";


    } else {
        document.querySelector(".iconePseudo").classList.remove("d-none");
        inputPseudo.classList.add("text-success");
        document.querySelector(".iconePseudo").classList.replace("bi-x", "bi-check");
        document.querySelector(".iconePseudo").style.color="green";


    }


    // ********** On traite le mail ici *************


        // on va utiliser les regex


    if (!regexMail.test(valueEmail)) {

        document.querySelector("#emailError").classList.add("error");
        document.querySelector("#emailError").classList.remove("d-none");

    } 


    // ********** On traite le mot de passe ici *************


    if (!regexMdp.test(valuePassword)) {

        document.querySelector("#passwordError").classList.add("error");
        document.querySelector("#passwordError").classList.remove("d-none");

    } 

});

let show = document.querySelector("#show");

show.addEventListener("click", ()=>{


    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        show.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    } else {
        inputPassword.type = "password";
        show.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }


});

