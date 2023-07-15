/*
@author Rahul Chandankeri
*/
$.validator.addMethod(
  "isValidName",
  function (value, element) {
    return this.optional(element) || /^[a-zA-Z][a-zA-Z ]*$/.test(value);
  },
  "Enter Valid Name"
);
$.validator.addMethod(
  "isValidEmail",
  function (value, element) {
    return this.optional(element) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
  },
  "Enter Valid Email id"
);
$.validator.addMethod(
  "indianmobilenumber",
  function (value, element) {
    return this.optional(element) || /^(0|91)?[6-9][0-9]{9}$/.test(value);
  },
  "Mobile Number Must Start Between 6-9"
);
// FOR CITY ONLY
$.validator.addMethod(
  "isValidCity",
  function (value, element) {
    return this.optional(element) || /^[A-Za-z]+$/.test(value);
  },
  "Enter Valid City"
);
// JQUERY FORM VALIDATION
$(document).ready(function (e) {
  $("#signupForm").validate({
    // Rules
    rules: {
      full_name: {
        required: true,
        minlength: 2,
        maxlength: 20,
        isValidName: true,
      },
      email_id: {
        required: true,
        email: true,
        isValidEmail: true,
      },
      phone_number: {
        required: true,
        minlength: 10,
        maxlength: 10,
        indianmobilenumber: true,
      },
      city: {
        required: true,
        isValidCity: true,
      },
    },

    // Error Messages

    messages: {
      full_name: {
        required: "Full Name is required",
        minlength: "Name Must Be Minimum 2 Characters",
        maxlength: "Name Cannot Be Greater 16 Characters",
      },
      email_id: {
        required: "Please Enter Valid Email",
      },
      phone_number: {
        required: "Phone number is required",
        minlength: "Phone Number Must Be 10 Digits",
        maxlength: "Phone Number Must Be 10 Digits",
      },
      city: {
        required: "City is required",
      },
    },

    // ON FORM SUBMIT
    submitHandler: function (form, event) {
      event.preventDefault();
      event.stopPropagation();

      const userData = {
        full_name: event.target.full_name.value,
        email_id: event.target.email_id.value,
        phone_number: event.target.phone_number.value,
        city: event.target.city.value,
      };
      console.log(userData);
      // AJAX CALL
      $.ajax({
        method: "POST",
        url: "https://api.example.com/signup",
        data: userData,
        dataType: "json",
        success: function (response) {},
        error: function (error) {
          console.log(error);
        },
      });
    },
  });
});
