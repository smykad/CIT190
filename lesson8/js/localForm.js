document.getElementById("sub").addEventListener("click",function(){
	localStorage.dname = document.getElementById("dname").value;
	localStorage.email = document.getElementById("email").value;
	localStorage.phone = document.getElementById("phone").value;
	localStorage.movier = document.getElementById("movier").value;
	window.location.assign("localConfirm.html");
});