	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
		console.log(computer);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
        var guess = new Number(document.getElementById("guess").value);
		// moved this here because if you got it on first try it shows you got it in 0 tries, instead of first try
			
		tries++;
		try{
			// Catches if input is not a number
			if(isNaN(guess))
				throw TypeError();
			
			// catches if input is between 1 and 100
			if(!isNaN(guess))
			{
				if(guess<=0 || guess > 100)
				throw RangeError();
			}

			if (computer==guess){
				document.getElementById("comments").value="You guessed correctly - congratulations! It only took " + tries + " tries!";
			} 
			else if (computer<guess) {
				document.getElementById("comments").value="Your guess is too high, try again!";
					
				document.getElementById("tries").value=tries;
				console.count("Number of guesses too high")
			}
			else {
				document.getElementById("comments").value="Your guess is too low, try again!";
				
				document.getElementById("tries").value=tries;
			}
				
		}
		catch(Err){
			console.info("Invalid Input: " + guess)
			document.getElementById("tries").value=tries;
			document.getElementById("comments").value="";
		}

			
			

				
			
			 
		});
     


