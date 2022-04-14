/*
a) Create an event listener and handler for the registration button

b) Pass the event object to the anonymous function called by the event handler

c) Use the event object to prevent the default form submission that erases all contents ( this requires using e.preventDefault(); )

d) Set all error display errors to blanks as shown in the example below:

Example: document.getElementById("firstnameError").innerHTML="";

NOTE: Since you don't know which errors will be displayed, you should set all of them to blanks

e) Create variables to hold data from the form. You can use document.getElementById for all form data.

To retrieve the item selected from the datalist, you need to use the ID in the input tag instead of the datalist tag

<input list="season" id="seasonList" name="season" style="width:100px;" >
<datalist id="season" >

To retrieve values from the checkboxes, you can use each checkbox ID, but instead of retrieving the value, you need to retrieved the "checked" status which will either be true or false.

Example: var dining =document.getElementById("dining").checked;

f)  Create an errorFlag variable and set it to n or false. NOTE: This is a state variable that you will set to 'y' or true when an error occurs. You will check this variable to determine if you need to go to the confirmation page or if you need to remain on the form because of an error.

g)   Add the error detection code to your JavaScript. This should be done in separate if statements that turn on the error flag if there is a problem (see (localForm.js ) The example shows input text boxes and it shows how to validate email addresses.

You need to code the following rules for your form:

First name, last name and email are required and cannot be blank. You can check each variable you created to make sure it isn't blank.
Email should be a valid address (look at the code in the localForm.js example because it validates email)
The datalist should have 1 item selected. You can check the variable you created to make sure it isn't blank
The checkboxes must have at least 1 turned. The value stored in the variables you are checking will be true or false.

To check for this, you need to do something like this:

if (!star5 && !rental && !pool && !fitness && !golf && !beach && !room && !dining) {
document.getElementById("accomodationError").innerHTML = "Select at least one accomodation feature you prefer";
errorFlag="y";
}

This reads if star5 isn't true (or checked) and rental isn't true (or checked) and fitness isn't true (or checked) etc.
h) At the bottom of the anonymous function created by the event handler, you need to check the error flag to see if it is still set to 'n'. If it is, then you can redirect to the confirmation page.
*/

document.getElementById("sub").addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("lastnameError").innerHTML="";
	document.getElementById("firstnameError").innerHTML="";
	document.getElementById("emailError").innerHTML="";
    document.getElementById("season").innerHTML="";
    document.getElementById("accomodationError").innerHTML="";
	var fName = document.getElementById("firstname").value;
	var lName =document.getElementById("lastname").value;
	var email =document.getElementById("email").value;
    var season = document.getElementById("seasonList").value;
    var elements = document.getElementsByTagName('input')
	var errorFlag='n';
    var form_data = new FormData(document.querySelector("form"));
    if(!form_data.has("accomodations[]"))
    {
        document.getElementById("accomodationError").innerHTML="Please select an accomodation";
        errorFlag='y';
    }
	if(fName==""){
		document.getElementById("firstnameError").innerHTML = "You must fill in the first name";
		errorFlag='y';
	} 
	if (lName=="") {
		document.getElementById("lastnameError").innerHTML = "You must fill in the last name";
		errorFlag='y';		
	}
	if (email==""){
		document.getElementById("emailError").innerHTML="You must fill in the email address";
		errorFlag='y';
	}
    if (season==""){
        document.getElementById("seasonError").innerHTML="You must select a season";
		errorFlag='y'; 
    }
	if(email) {
		var atposition=email.indexOf("@");  
		var dotposition=email.lastIndexOf(".");  
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
	 	  document.getElementById("emailError").innerHTML="The email address you entered is invalid.";
	      errorFlag='y';		  
		}
  	} 
    
	if(errorFlag=='n'){
		window.location.assign("vacationConfirmation.html");
	}	
});