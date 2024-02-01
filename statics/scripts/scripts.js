function myFunction() {
    var x = document.getElementById("MyNav");
    if (x.className === "Nav") {
      x.className += " responsive";
    } else {
      x.className = "Nav";
    }
  }

// Python
// Get the modal
var modal_python = document.getElementById("python");

// Get the button that opens the modal
var btn_python = document.getElementById("pythonBtn");

// Get the <span> element that closes the modal
var span_python = document.getElementsByClassName("python_close")[0];

// When the user clicks on the button, open the modal
btn_python.onclick = function() {
  modal_python.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_python.onclick = function() {
  modal_python.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_python) {
    modal_python.style.display = "none";
  }
}

//Data Science
// Get the modal
var modal_data = document.getElementById("datascience");

// Get the button that opens the modal
var btn_data = document.getElementById("dataBtn");

// Get the <span> element that closes the modal
var span_data = document.getElementsByClassName("data_close")[0];

// When the user clicks on the button, open the modal
btn_data.onclick = function() {
  modal_data.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_data.onclick = function() {
  modal_data.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_data) {
    modal_data.style.display = "none";
  }
}

//Django
// Get the modal
var modal_django = document.getElementById("django");

// Get the button that opens the modal
var btn_django = document.getElementById("djangoBtn");

// Get the <span> element that closes the modal
var span_django = document.getElementsByClassName("django_close")[0];

// When the user clicks on the button, open the modal
btn_django.onclick = function() {
  modal_django.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_django.onclick = function() {
  modal_django.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_django ) {
    modal_django.style.display = "none";
  }
}

//IoT
// Get the modal
var modal_iot = document.getElementById("iot");

// Get the button that opens the modal
var btn_iot = document.getElementById("iotBtn");

// Get the <span> element that closes the modal
var span_iot = document.getElementsByClassName("iot_close")[0];

// When the user clicks on the button, open the modal
btn_iot.onclick = function() {
  modal_iot.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_iot.onclick = function() {
  modal_iot.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_iot ) {
    modal_iot.style.display = "none";
  }
}