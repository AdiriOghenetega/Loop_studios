/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */

const body = document.querySelector("body");
const dropDownBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

dropDownBtn.addEventListener("click", getContent);

function getContent() {
  //   document.getElementById("myDropdown").classList.toggle("hidden");
  //   console.log(123);

  if (dropContent.classList.contains("hidden")) {
    dropContent.classList.remove("hidden");
    dropContent.classList.add("window");
    body.classList.add("no-scroll");
  } else {
    dropContent.classList.add("hidden");
    dropContent.classList.remove("window");
    body.classList.remove("no-scroll");
  }
}

// Close the dropdown if the user clicks outside of it

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("window")) {
        console.log(123);
        // openDropdown.classList.add("hidden");

        dropContent.classList.add("hidden");
        // dropContent.classList.add("window");
      }
    }
  }
});
