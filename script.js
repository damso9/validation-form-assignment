let name1 = document.querySelector("#name");
let email = document.querySelector('#email')
let password = document.querySelector("#password");
let password1 = document.querySelector("#password1");
let form = document.querySelector("#formy");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    let nameValue = name1.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password1Value = password1.value.trim();

    if (nameValue === '') {
        //show error
    console.log("the name is blank")
        setErrorFor(name1, "name cannot be blank")
    } else {
        Success('filled');
    }
    if (emailValue === ''){
        console.log("the email is blank")
        setErrorFor(email, "email cannot be blank")

    } else {
        Success('filled');
    }
    if(passwordValue === ''){
        console.log("the password is blank")
        setErrorFor(password, 'Password cannot be blank');
    } else {
        Success('filled');
    }
    if(password1Value === ''){
        console.log("the password1 is blank")
        setErrorFor(password1, 'Password1 cannot be blank');
    } 
    if (passwordValue !== password1Value) {
        setErrorFor(password1, 'Passwords does not match');
    }
 }
function setErrorFor(input, message) {
    let formControl = input.parentElement; //
    let small = formControl.querySelector('span');
    //add error message inside small
    small.innerText = message;
}
function Success(message) {
    // let formControl = input.parentElement; //
    let small = document.querySelector('span');
    //add error message inside small
    small.innerText = message;
}

let state = false;
function toggle() {
    if (state){
        document.querySelector("#password").setAttribute("type","password");
        document.querySelector("#eye").style.color = "#7a797e";
        state = false;
    } else {
        document.querySelector("#password").setAttribute("type","text");
        document.querySelector("#eye").style.color = "#5887ef";
        state = true;

    }
}






// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'data-success';
// }
// // function isEmail(email) {
// //     return const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|
// //     (\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
// //         \.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        
// // }