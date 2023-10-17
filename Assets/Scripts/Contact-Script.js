function alertFunc() {
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;


  if (email.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields (Email and Message).");
      return false;
  }
  alert("Message sent successfully!")
  return true;
}

function copyTextToClipboard(text) {
 
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;

  document.body.appendChild(tempTextArea);

  tempTextArea.select();

  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  var alertBox = document.getElementById("alertBox");
  setTimeout(() => {
  alertBox.textContent = "Text copied to clipboard: " + text;
  setTimeout(() => {
    alertBox.textContent = "";
    
  }, 2000);
  }, 1);
}