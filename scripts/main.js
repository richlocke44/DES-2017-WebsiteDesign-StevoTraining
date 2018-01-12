//drop down menu
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
//image carousel
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
//form js
//onload callback function
 function validate() {

    console.log("in main function");
    var myForm  = document.getElementById("send");
    myForm.addEventListener("submit",validateForm);
  }

  //validate callback function 
  function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("send"); 

    if (myForm.firstname.value === "") {
        formValid = false;
        //display error message + changes background colour to red 
        document.getElementById("firstnameRequiredError").style.display = "inline";
		document.getElementById("firstname").style.backgroundColor = "#900";
		
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' 
		 document.getElementById("firstnameRequiredError").style.display = "none";
		 document.getElementById("firstname").style.backgroundColor = "green";
		
	
    } 		

    if (myForm.lastname.value === "") {
        formValid = false;
        //display error message + changes background colour to red 
        document.getElementById("lastnameRequiredError").style.display = "inline";
		document.getElementById("lastname").style.backgroundColor = "#900";
		
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' 
         document.getElementById("lastnameRequiredError").style.display = "none";
		 document.getElementById("lastname").style.backgroundColor = "green";
		 
    }
	
	if (myForm.postcode.value === "") {
        formValid = false;
        //display error message + changes background colour to red 
        document.getElementById("postcodeRequiredError").style.display = "inline";
		document.getElementById("postcode").style.backgroundColor = "#900";
			
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' 
         document.getElementById("postcodeRequiredError").style.display = "none";
		 document.getElementById("postcode").style.backgroundColor = "green";
		 
    }
	
	if (myForm.email.value === "") {
        formValid = false;
        //display error message  + changes background colour to red 
        document.getElementById("emailRequiredError").style.display = "inline";
		document.getElementById("email").style.backgroundColor = "#900";
		
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' 
         document.getElementById("emailRequiredError").style.display = "none";
		 document.getElementById("email").style.backgroundColor = "green";
		 
    }
	
	if (myForm.number.value === "") {
        formValid = false;
        //display error message  + changes background colour to red
        document.getElementById("numberRequiredError").style.display = "inline";
		document.getElementById("number").style.backgroundColor = "#900";
		
		//stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required'
         document.getElementById("numberRequiredError").style.display = "none";
		 document.getElementById("number").style.backgroundColor = "green";
		 
    }
	
	if (myForm.message.value === "") {
        formValid = false;
        //display error message  + changes background colour to red 
        document.getElementById("messageRequiredError").style.display = "inline";
		
        //stop form from submitting
        event.preventDefault();
    } else {
		// removes 'required' 
         document.getElementById("messageRequiredError").style.display = "none";
		 
    }

  }
  //changes the background colour of the input fields when a key is pressed down
  function keyDown() {
	  document.getElementById("firstname").addEventListener("textInput", green);
	  document.getElementById("lastname").addEventListener("textInput", green2);
	  document.getElementById("postcode").addEventListener("textInput", green3);
	  document.getElementById("email").addEventListener("textInput", green4);
	  document.getElementById("number").addEventListener("textInput", green5);
	  document.getElementById("postcodeRequiredError").style.display = "none";
	 
  }
  //displays background colour of input fields to green
  function green() {
	  document.getElementById("firstname").style.backgroundColor = "green";
  }
  function green2() {
	  document.getElementById("lastname").style.backgroundColor = "green";
  }
  function green3() {
	  document.getElementById("postcode").style.backgroundColor = "green";
  }
  function green4() {
	  document.getElementById("email").style.backgroundColor = "green";
  }
  function green5() {
	  document.getElementById("number").style.backgroundColor = "green";
  }
// changes background colour of input field to #900(dark red) when field is focused on/selected
function changeRed() {
	var input = document.getElementById("firstname").value;
	var input2 = document.getElementById("lastname").value;
	var input3 = document.getElementById("postcode").value;
	var input4 = document.getElementById("email").value;
	var input5 = document.getElementById("number").value;
	
	if (input === "") {
		document.getElementById("firstname").addEventListener("focusin", myFocusFunction);	
		}
	if (input2 === "") {
		document.getElementById("lastname").addEventListener("focusin", myFocusFunction2);	
		}
	if (input3 === "") {
		document.getElementById("postcode").addEventListener("focusin", myFocusFunction3);	
		}
	if (input4 === "") {
		document.getElementById("email").addEventListener("focusin", myFocusFunction4);	
		}
	if (input5 === "") {
		document.getElementById("number").addEventListener("focusin", myFocusFunction5);	
		}	
}
function myFocusFunction() {
    document.getElementById("firstname").style.backgroundColor = "#900";  
}
function myFocusFunction2() {
    document.getElementById("lastname").style.backgroundColor = "#900";  
}
function myFocusFunction3() {
    document.getElementById("postcode").style.backgroundColor = "#900";  
}
function myFocusFunction4() {
    document.getElementById("email").style.backgroundColor = "#900";  
}
function myFocusFunction5() {
    document.getElementById("number").style.backgroundColor = "#900";  
}

