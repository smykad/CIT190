var dname=email=phone=movier="";
if (localStorage.dname)
	dname = localStorage.dname;
if (localStorage.email)
	email = localStorage.email;
if (localStorage.phone){
	var ph = String(localStorage.phone);
	areaCode = ph.substr(0,3)
	centralOfficeCode = ph.substr(3,3);
	localNum=ph.substr(6,4);
	phoneFormatted="(" + areaCode + ")" + centralOfficeCode + "-" + localNum;
if (localStorage.movier)
	movier = localStorage.movier;
}	
if(phone==""&&email==""&&dname==""&&movier==""){
	alert("You must register before we can confirm your registration");
	window.location.assign("localForm.html");
}
else{
	var display = "<p>" + dname  + ", " + "Welcome to the Movie Lovers Club<br>"+
	" We will contact you using: " + phoneFormatted + " or " + email + "</p>";
	document.getElementById("confirm").innerHTML = display;		
}	