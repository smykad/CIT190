/* The javascript file should include the following : 

    a.  Create a function that can generate an object.  The function should have an object variable that includes at least 3 properties and it should have a method
    you decide on the type of object, the properties and the method.
    You cannot use hotel or pet for the object. Anything else is OK

    example:

    function Pet(name,breed,price,discount){
        this.name=name;
        this.breed=breed;
        this.price=price;
        this.discount=discount;
        this.cost=function(){
            var totalCost = parseInt(this.price) - parseInt(this.discount);
            return "$" + totalCost;
        }
        this.message = function(){
        var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
        return discountPercent;
        }
    };
*/

function Art(name,category,price,discount){
	this.name=name;
	this.category=category;
	this.price=price;
	this.discount=discount;
	this.cost=function(){
		var totalCost = parseInt(this.price) - parseInt(this.discount);
		return "$" + totalCost;
	}
	this.message = function(){
		var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
		return discountPercent;
	}		
};

// enter pet #1
	var n=prompt("Enter the artists name you would like to commission: ");
	var b=prompt("Enter the category of art (emote or profile picture): ");
	var p=prompt("Enter the desired price: ");
	var d=prompt("Enter the desired discount: ");
	var firstArt=new Art(n,b,p,d);

// enter pet #2
	var secondArt = new Art("Vincent", "Emote", 90, 9);

// Add 7 days time (added in milliseconds)
	var today = new Date();
    var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);	
	
// update values in HTML file for the first art piece
	document.getElementById("artistName1").innerHTML = firstArt.name;
	document.getElementById("artCategory1").innerHTML = firstArt.category;
	document.getElementById("artRetail1").innerHTML = firstArt.price;
	document.getElementById("artDiscount1").innerHTML = firstArt.discount;			
	document.getElementById("artTotal1").innerHTML = firstArt.cost();
	document.getElementById("discount1").innerHTML = firstArt.message();	

// update values in HTML file for the second art piece
	document.getElementById("artistName2").innerHTML = secondArt.name;
	document.getElementById("artCategory2").innerHTML = secondArt.category;
	document.getElementById("artRetail2").innerHTML = secondArt.price;
	document.getElementById("artDiscount2").innerHTML = secondArt.discount;			
	document.getElementById("artTotal2").innerHTML = secondArt.cost();
	document.getElementById("discount2").innerHTML = secondArt.message();	
	
// update the date in the footer element of the HTML file
	document.getElementById("date").innerHTML = weekFromToday;