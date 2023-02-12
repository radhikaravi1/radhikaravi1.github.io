	function toggle_visibility(id) {
		var content = document.getElementsByClassName('section');
		for(var i=0; i<content.length; i++) {
			if(content[i].id == id) {
				content[i].style.display = 'block';
			} 
			else {
				content[i].style.display = 'none';
			}
		}
	}
	
	function includeHTML() {
		var z, i, elmnt, file, xhttp;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
			elmnt = z[i];
			/*search for elements with a certain atrribute:*/
			file = elmnt.getAttribute("w3-include-html");
			if (file) {
				/* Make an HTTP request using the attribute value as the file name: */
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4) {
						if (this.status == 200) {elmnt.innerHTML = this.responseText;}
						if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
						/* Remove the attribute, and call this function once more: */
						elmnt.removeAttribute("w3-include-html");
						includeHTML();
					}
				} 
				xhttp.open("GET", file, true);
				xhttp.send();
				/* Exit the function: */
				return;
			}
		}
	}
	
	function accordionDisplay() {
		var acc = document.getElementsByClassName("accordion");
	
		for (var i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {

				// var wOld = window.pageYOffset;
				var yOld = this.getBoundingClientRect().top;
				// console.log(yOld);
				var oldPosition = yOld + window.pageYOffset;
				// var oldPosition = yOld + document.getBoundingClientRect().top;
				for(var it = 0; it < acc.length; it++) {
					if(acc[it].id != this.id) {
						acc[it].classList.remove("active");
						acc[it].nextElementSibling.style.maxHeight = null;
					}
				}
			
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				
				if (panel.style.maxHeight){
					panel.style.maxHeight = null;
				} 
				else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}

				// var wNew = window.pageYOffset;
				// var yNew = this.getBoundingClientRect().top;
				var newPosition = this.getBoundingClientRect().top + window.pageYOffset;
				// var newPosition = this.getBoundingClientRect().top + document.getBoundingClientRect().top;
				if (newPosition - yOld < 0) {
					window.scrollTo(0, newPosition);
				}
				else {
					window.scrollTo(0, newPosition - yOld);
				}
				// window.scrollBy(0, newPosition - yOld);
				// var yNew = this.getBoundingClientRect().top;
				// console.log(yNew);
			});
		}
	}
	
	function myFunction() {
		var x = document.getElementById("collapsedMenu");
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} 
		else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}
	
	function lastModifiedDisplay() {
		var x = Date(document.lastModified);
		document.getElementById("lastModified").innerHTML = x;
	}