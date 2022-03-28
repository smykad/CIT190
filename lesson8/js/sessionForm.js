document.getElementById("sub").addEventListener("click",function(){
	sessionStorage.dname = document.getElementById("dname").value;
	sessionStorage.email = document.getElementById("email").value;
	sessionStorage.phone = document.getElementById("phone").value;
	sessionStorage.movier = document.getElementById("movier").value;
	window.location.assign("sessionConfirm.html");
});