var field = document.querySelector("input");
// Your code here.
field.addEventListener("keypress", function(event) {
  if (event.charCode == "Q".charCodeAt(0) ||
    event.charCode == "W".charCodeAt(0) ||
    event.charCode == "X".charCodeAt(0)) {
    event.preventDefault();
  }
});
