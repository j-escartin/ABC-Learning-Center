
const form = document.getElementById('form');
const names = document.getElementById('name');
const email = document.getElementById('email')
const contact = document.getElementById('contact');
const courseList = document.getElementById('courseList');
const address = document.getElementById('address');



form.addEventListener('submit', e => {
    checkInputs();
    // console.log('form Submitted')
    // e.preventDefault();

});

// function cBoxValue(){
//     var cValue = document.getElementById('check').ariaChecked;
//     console.log(cValue.value)
// }

function checkInputs(){
    const nameValue = names.value; 
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    const courseListValue = courseList.value;
    const addressValue = address.value;
    if(nameValue === '') {
        setErrorFor(names, 'Name cannot be blank')
    } else {
        setSuccessFor(names)
    }
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid Email')
    } else {
        setSuccessFor(email)
    }
    if(contactValue === '') {
        setErrorFor(contact, 'Contact Number cannot be blank')
    } else if(!isContact(contactValue)) {
        setErrorFor(contact, 'Invalid Number')
    }
     else {
        setSuccessFor(contact)
    }
    if(addressValue === ''){
        setErrorFor(address, 'Address cannot be blank')
    } else {
        setSuccessFor(address)
    }
    if(nameValue === '' || emailValue === '' || !isEmail(emailValue) || contactValue === '' || !isContact(contactValue) ||  addressValue === '') {
        console.log("form is not submitted");
     } 
    // if(nameValue === '' || emailValue === '' || !isEmail(emailValue) || contactValue === '' || !isContact(contactValue) ||  addressValue === '') {
    //     alert("Validation error");
    //  } else {
    //     $("#form").submit();
    // }
    // localStorage.setItem('name', nameValue);
    // localStorage.setItem('email', emailValue);
    // localStorage.setItem('contact', contactValue);
    // localStorage.setItem('courseList', courseListValue);
    // localStorage.setItem('address', addressValue);
    // let temporaryData = {
    //     names: nameValue,
    //     emails: emailValue,
    //     contacts: contactValue,
    //     course: courseListValue, 
    //     address: addressValue,
    // }
    // formerData.push(temporaryData)
    // store(formerData);se
};
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formControl error'
    small.innerText = message;
};
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formControl success'
};
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isContact(contact) {
    return /^\+[1-9]{1}[0-9]{3,14}$/g.test(contact);
};
// var formerData = [];
// var data;
// function store(data) {
//     localStorage.setItem("formerData", JSON.stringify(data));
//     data = JSON.parse(localStorage.getItem("formerData"));
//     return data;
// };
// store(formerData);