﻿document.getElementById("sub").addEventListener("click",function(){
	localStorage.firstname = document.getElementById("firstName").value;
	localStorage.lastname = document.getElementById("lastName").value;
	localStorage.email = document.getElementById("emailAddress").value;
	localStorage.phone = document.getElementById("phone").value;
	window.location.assign("localConfirm.html");
});
