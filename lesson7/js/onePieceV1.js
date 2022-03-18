document.getElementById("pirate").addEventListener("click",function(){
var xhr = new XMLHttpRequest();   // Create XMLHttpRequest object
xhr.onload = function() {                       
  if(xhr.status === 200) {      
    responseObject = JSON.parse(xhr.responseText);
    array=responseObject.pirate;
    processItem(array);
  }
};
xhr.open('GET', 'json/pirate.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
});

function processItem(array){
   var newContent = '';
    for (var i = 0; i < array.length; i++) { // Loop through object
      newContent += '<p>Pirate: ' + array[i].Name + '<br>';
      newContent += 'Crew: ' + array[i].Crew + '<br>';
      newContent += 'Bounty: ' + array[i].Bounty + '</p>';
      newContent += '<hr>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}