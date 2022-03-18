function calcBMI() {
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
	if (weight=="" || height=="")
	    document.getElementById("msg").innerHTML="You need to enter a valid number for weight and height, try again!";
	else if (isNaN(weight) || isNaN(height))
    	document.getElementById("msg").innerHTML="You need to enter a valid number for weight and height, try again!";
    else if (height<48||height>84)
    	document.getElementById("msg").innerHTML="Height needs to be a number between 48 and 84, please try again!";	
	else {   
        var bmi = (weight * 703)/(height * height)
        
        document.getElementById("msg").innerHTML="Your current BMI is: " + bmi.toFixed(2);
	}
}
function getFocus(){
	document.getElementById("weight").focus();
	document.getElementById("msg").innerHTML=" ";
}