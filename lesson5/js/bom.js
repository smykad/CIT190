//
// Window Object Method I
//

document.getElementById("print").addEventListener("click",function(){window.print();});

//
// Window Object Method II
//

//
// location object method
//

document.getElementById("newLoc").addEventListener("click", function(){
	location.assign("https://lisabalbach.com/smykad/CIT190/");
});


document.getElementById("window").addEventListener("click",function(){
	var myWindow = window.open("", "myWindow", "width=600, height=500");
	
	//
	// Location information
	//
	myWindow.document.write(
		"<h2>URL Information</h2>" +
		"<p>Location host: " + location.host + "</p>" + 
		"<p>Location hostname: " + location.hostname + "</p>" + 
		"<p>Location hypertext reference: " + location.href + "</p>" + 
		"<p>Location origin: " + location.origin + "</p>" + 
		"<p>Location pathname: " + location.pathname + "</p>" + 
		"<p>Location port: " + location.port + "</p>" + 
		"<p>Location protocol: " + location.protocol + "</p>" + 
		"<p>Location search: " + location.search + "</p></div>" +
		"<body style='background-color:rgb(114, 137, 218);'>");
});

//
// Window Information
//

document.getElementById("info").addEventListener("click",function(){
	var width=screen.width;
	var height=screen.height;

	document.getElementById("result").innerHTML = 
	"<p>Screen Width: " + width + "</p>" + 
	"<p>Height: " + height + "</p>" 
});

// Navigator information



function navigatorInfo(){
	document.getElementById("result").innerHTML = "<p>Cookies Enabled?: " + 
	 navigator.cookieEnabled+ "</p>" + 
	"<p>App Name: " + navigator.appName+ "</p>" + 
	"<p>App Code Name: " + navigator.appCodeName+ "</p>" + 
	"<p>Engine Name of Browser: " + navigator.product + "</p>" + 
	"<p>Application Version: " + navigator.appVersion + "</p>" + 
	"<p>Applciation user agent: " + navigator.userAgent + "</p>" + 
	"<p>Platform: " + navigator.platform + "</p>" + 
	"<p>Java enabled?: " + navigator.javaEnabled()+ "</p>" + 
	"<p>Language: " + navigator.language + "</p></div>";
};


// Window information

function windowInfo(){
document.getElementById("result").innerHTML = 
	"<p>Height: " + window.innerHeight + "</p>" + 	
	"<p>Width: " + window.innerWidth + "</p>" + 
	"<p>Screen X Position: " + window.screenX + "</p>" + 
	"<p>Screen Y Position: " + window.screenY + "</p>" + 
	"<p>Scrolled Horizontal Columns: " + window.pageXOffset + "</p>" + 
	"<p>Scrolled Vertical Lines: " +window.pageYOffset + "</p>"; 
};


// History

function historyInfo(){
	document.getElementById("result").innerHTML =
	"<p>The number of URLs in the history list is: " +
	history.length + "</p>";
};

// Clear info window

function getFocus(){
	document.getElementById("result").innerHTML=" ";
};

document.getElementById("reset").addEventListener("click",getFocus);
document.getElementById("getNav").addEventListener("click",navigatorInfo);
document.getElementById("getWin").addEventListener("click",windowInfo);
document.getElementById("getHist").addEventListener("click",historyInfo);