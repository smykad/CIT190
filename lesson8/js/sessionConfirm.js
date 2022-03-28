var dname=email=phone=movier="";
if (sessionStorage.dname)
	dname = sessionStorage.dname;
if (sessionStorage.email)
	email = sessionStorage.email;
if (sessionStorage.phone){
	var ph = String(sessionStorage.phone);
	areaCode = ph.substr(0,3)
	centralOfficeCode = ph.substr(3,3);
	localNum=ph.substr(6,4);
	phoneFormatted="(" + areaCode + ")" + centralOfficeCode + "-" + localNum;
if (sessionStorage.movier)
	movier = sessionStorage.movier;
}	
if(phone==""&&email==""&&dname==""&&movier==""){
	alert("You must register before we can confirm your registration");
	window.location.assign("sessionForm.html");
}
else{
	var display = "<p>" + dname  + ", " + "Welcome to the Movie Lovers Club<br>"+
	" We will contact you using: " + phoneFormatted + " or " + email + "</p>";
	document.getElementById("confirm").innerHTML = display;		
}	