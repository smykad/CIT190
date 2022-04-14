$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        accomodations: {
            required: true,
            minlength: 2
          },
        seasons: "required"
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        email: "Please enter a valid email address",
        accomodations: {
            required: "Please select at least 1 accomodations",
            minlength: "You must select at least two accomodation"
          },
        season: "Please select a season"
      },
      submitHandler: function(form) {form.submit();}
    });
  });