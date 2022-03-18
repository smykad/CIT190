document.getElementById("pirate").addEventListener("click",function(){
var xhr = new XMLHttpRequest();   // Create XMLHttpRequest object
xhr.onload = function() {                       
  if(xhr.status === 200) {      
    responseObject = JSON.parse(xhr.responseText);
    array=responseObject.strawhat;
    processItem(array);
  }
};
xhr.open('GET', 'json/strawhats.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
});

document.getElementById("warlord").addEventListener("click",function(){
var xhr = new XMLHttpRequest();   // Create XMLHttpRequest object
xhr.onload = function() {                       
  if(xhr.status === 200) {      
    responseObject = JSON.parse(xhr.responseText);
    array=responseObject.warlord;
    processItem(array);
  }
};
xhr.open('GET', 'json/warlord.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
});
document.getElementById("revo").addEventListener("click",function(){
var xhr = new XMLHttpRequest();   // Create XMLHttpRequest object
xhr.onload = function() {                       
  if(xhr.status === 200) {      
    responseObject = JSON.parse(xhr.responseText);
    array=responseObject.revolutionary;
    processItem(array);
  }
};
xhr.open('GET', 'json/revolutionary.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
});
function processItem(array){
   var newContent = '';
    for (var i = 0; i < array.length; i++) { // Loop through object
      newContent += '<p>Name: ' + array[i].Name + '<br>';
      newContent += 'Rank: ' + array[i].Rank + '<br>';
      newContent += 'Bounty: ' + array[i].Bounty + '</p>';
      newContent += '<hr>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}
