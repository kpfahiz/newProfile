function myFunction() {
    var x = document.getElementById("MyNav");
    if (x.className === "Nav") {
      x.className += " responsive";
    } else {
      x.className = "Nav";
    }
  }