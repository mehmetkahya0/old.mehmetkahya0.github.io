document
  .getElementById("bioButton")
  .addEventListener("click", function (event) {
    var bioElements = document.querySelectorAll(".bio h2");
    for (var i = 0; i < bioElements.length; i++) {
      bioElements[i].classList.add("red-border");
    }
  });

document
  .getElementById("skillsButton")
  .addEventListener("click", function (event) {
    var bioElements = document.querySelectorAll(".skills h2");
    for (var i = 0; i < bioElements.length; i++) {
      bioElements[i].classList.add("red-border");
    }
  });

document
  .getElementById("contactButton")
  .addEventListener("click", function (event) {
    var bioElements = document.querySelectorAll(".contact h2");
    for (var i = 0; i < bioElements.length; i++) {
      bioElements[i].classList.add("red-border");
    }
});


function updateProgress1(percent) {
  var element = document.getElementById("progress1");
  element.style.width = percent + "%";
}

// Example usage:
updateProgress1(95); // Sets the progress bar to 50%

function updateProgress2(percent) {
  var element = document.getElementById("progress2");
  element.style.width = percent + "%";
}
// Example usage:
updateProgress2(95); // Sets the progress bar to 50%


function updateProgress3(percent) {
  var element = document.getElementById("progress3");
  element.style.width = percent + "%";
}
// Example usage:
updateProgress3(60); // Sets the progress bar to 50%


function updateProgress4(percent) {
  var element = document.getElementById("progress4");
  element.style.width = percent + "%";
}
// Example usage:
updateProgress4(40); // Sets the progress bar to 50%



function updateProgress5(percent) {
  var element = document.getElementById("progress5");
  element.style.width = percent + "%";
}
// Example usage:
updateProgress5(15); // Sets the progress bar to 50%
