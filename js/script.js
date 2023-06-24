function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var commentInput = document.getElementById("comment");

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    return false;
  }

  if (commentInput.value.trim() === "") {
    alert("Please enter your comment.");
    return false;
  }

  // Additional validation logic can be added here

  // If all validation passed, you can proceed with form submission
  // Uncomment the line below to submit the form
  // document.querySelector("form").submit();

  return true;
}




