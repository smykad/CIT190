var first=last=email=phone="";
if (localStorage.firstname)
	first = localStorage.firstname;
if (localStorage.lastname)
	last = localStorage.lastname;
if (localStorage.email)
	email = localStorage.email;
if (localStorage.phone){
	var ph = String(localStorage.phone);
	areaCode = ph.substr(0,3)
	centralOfficeCode = ph.substr(3,3);
	localNum=ph.substr(6,4);
	phoneFormatted="(" + areaCode + ")" + centralOfficeCode + "-" + localNum;
}	
if(phone==""&&email==""&&first==""&&last==""){
	alert("You must register before we can confirm your memebership");
	window.location.assign("localForm.html");
}
else{
	var display = "<p>" + first + " " + last + ", " + "Welcome to the TC Runners!<br>"+
	" We will contact you using: " + phoneFormatted + " or " + email + "</p>";
	document.getElementById("confirm").innerHTML = display;		
}	