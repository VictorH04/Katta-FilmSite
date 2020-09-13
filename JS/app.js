// // ! Getting elements
// let names = document.getElementById('name');
// let groups = document.getElementById('groups');
// let classes = document.getElementById('classes');
// let email = document.getElementById('email');
// let submitBtn = document.getElementById('submitBtn');
// let form = document.getElementById('form');

// /** 


// section_registration--inputs_name-correct 

// section_registration--inputs_name-false 




// <img
//                 class="section_registration--inputs_class--correct" src="img/checkmark.svg" alt="checkmark"> <img
//                 class="section_registration--inputs_class--failed" src="img/close.svg" alt="checkmark">
// */

// // console.log(name);
// // console.log(groups);
// // console.log(classes);
// // console.log(email);
// // console.log(submitBtn);
// // console.log(form);

// submitBtn.addEventListener('click', function(e) {
// 	e.preventDefault();

// 	checkInputs();

// 	console.log(names.classList);
// 	console.log(groups.classList);
// 	console.log(classes.classList);
// 	console.log(email.classList);
// });

// function checkInputs() {
// 	// Get values from all possible inputs
// 	const namesValue = names.value;
// 	const groupValue = groups.value.trim();
// 	const classValue = classes.value.trim();
// 	const emailValue = email.value.trim();

// 	// Check if values are valid or not
// 	if (namesValue === '') {
// 		setErrorFor(namesValue);
// 	} else {
// 		setSuccessFor(namesValue);
// 	}

// 	if (groupValue === '') {
// 		setErrorFor(groupValue);
// 	} else {
// 		setSuccessFor(groupValue);
// 	}

// 	if (classValue === '') {
// 		setErrorFor(classValue);
// 	} else {
// 		setSuccessFor(classValue);
// 		return;
// 	}

// 	if (emailValue === '') {
// 		setErrorFor(emailValue);
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(emailValue, alert('Eposten er ikke riktig'));
// 	} else {
// 		setSuccessFor(emailValue);
// 	}
// }

// function setErrorFor() {
// 	// const formControlGroup = groups.parentElement;
// 	// const formControlClass = classes.parentElement;
// 	// const formControlEmail = email.parentElement;

// 	names.classList.add('section_registration--inputs_name-false');
// 	groups.classList.add('section_registration--inputs_group-false');
// 	classes.classList.add('section_registration--inputs_class-false');
// 	email.classList.add('section_registration--inputs_email-false');
// }

// function setSuccessFor() {
// 	names.classList.add('section_registration--inputs_name-correct');
// 	groups.classList.add('section_registration--inputs_group-correct');
// 	classes.classList.add('section_registration--inputs_class-correct');
// 	email.classList.add('section_registration--inputs_email-correct');
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
// 		email
// 	);
// }
