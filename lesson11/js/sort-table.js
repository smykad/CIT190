var compare = {                           // Declare compare object
    string: function(a, b) {                  // Add a method called name
      a = a.replace(/^the /i, '');          // Remove The from start of parameter
      b = b.replace(/^the /i, '');          // Remove The from start of parameter
  
      if (a < b) {                          // If value a is less than value b
        return -1;                          // Return -1
      } else {                              // Otherwise
        return a > b ? 1 : 0;               // If a is greater than b return 1 OR
      }                                     // if they are the same return 0
    },
    age: function(a, b) {              
      return a - b;                         // Return a minus b
    }
  };
  
  $('.sortable').each(function() {
    var $table = $(this);                     // This sortable table
    var $tbody = $table.find('tbody');        // Store table body
    var $controls = $table.find('th');        // Store table headers
    var rows = $tbody.find('tr').toArray();   // Store array containing rows
  
    $controls.on('click', function() {        // When user clicks on a header
      var $header = $(this);                  // Get the header
      var order = $header.data('sort');       // Get value of data-sort attribute
      var column;                             // Declare variable called column
  
      // If selected item has ascending or descending class, reverse contents
      if ($header.is('.ascending') || $header.is('.descending')) {  
        $header.toggleClass('ascending descending');    // Toggle to other class
        $tbody.append(rows.reverse());                // Reverse the array
      } else {                                        // Otherwise perform a sort                            
        $header.addClass('ascending');                // Add class to header
        // Remove asc or desc from all other headers
        $header.siblings().removeClass('ascending descending'); 
        if (compare.hasOwnProperty(order)) {  // If compare object has method
          column = $controls.index(this);         // Search for columnâ€™s index no
  
          rows.sort(function(a, b) {               // Call sort() on rows array
            a = $(a).find('td').eq(column).text(); // Get text of column in row a
            b = $(b).find('td').eq(column).text(); // Get text of column in row b
            return compare[order](a, b);           // Call compare method
          });
  
          $tbody.append(rows);
        }
      }
    });
  });