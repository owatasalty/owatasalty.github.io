var examples = document.getElementById("examples")
var art = document.getElementById("art")

examples.addEventListener('click', toggleExample);

function toggleExample() {
    if (art.style.display === "block") {
        art.style.display = "none";
      } else {
        art.style.display = "block";
      }
}