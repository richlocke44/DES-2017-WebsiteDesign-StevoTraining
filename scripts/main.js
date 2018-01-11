//show and hide menu
function dropmenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close menu when you click outside
window.onclick = function(event) {
  if (!event.target.matches('.menu')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

var myIndex = 0;
carousel();

function carousel() {
    var change;
    var slide = document.getElementsByClassName("slides");
    for (change = 0; change < slide.length; change++) {
       slide[change].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slide.length) {myIndex = 1}    
    slide[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

