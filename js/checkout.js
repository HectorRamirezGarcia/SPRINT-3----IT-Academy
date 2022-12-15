
// Exercise 6
function validate() {
	// Sintax Validation Name, Phone, Email, Password
	let name_reg =  /^[a-zA-Z\-]\w{2,14}$/;
	let email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]\w{2})*$/;
	let phone_reg = /^[0-9\-].{2,14}$/;
	let password_reg = /^(?=.*[0-9])[a-zA-Z0-9]\w{2,14}$/;

	var error = 0;
	// Get the input fields

	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");
	var fPassword = document.getElementById("fPassword");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");  
	var errorPhone = document.getElementById("errorPhone");
	var errorPassword = document.getElementById("errorPassword");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.match(name_reg) == null){
		error++;
		errorName.style.display = 'block';
	} else {
		errorName.style.display = 'none';
	}

	if(fLastN.value == "" || fLastN.value.match(name_reg) == null){
		error++;
		errorLastN.style.display = 'block';
	} else {
		errorLastN.style.display = 'none';
	}

	if(fEmail.value == "" || fEmail.value.match(email_reg) == null){
		error++;
		errorEmail.style.display = 'block';
	} else {
		errorEmail.style.display = 'none';
	}

	if(fPhone.value == "" || fPhone.value.match(phone_reg) == null){
		error++;
		errorPhone.style.display = 'block';
	} else {
		errorPhone.style.display = 'none';
	}

	if(fPassword.value == "" || fPassword.value.match(password_reg) == null || fPassword.value.length < 3){
		error++;
		errorPassword.style.display = 'block';
	} else {
		errorPassword.style.display = 'none';
	}

}
