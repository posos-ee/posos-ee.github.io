function load_newspaper(url) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, false);

	xhr.onload = function (e) {
		// Show dialog
		document.querySelector("main").children[0].children[0].children[0].innerText += (e.target.responseText);
	}
	
	xhr.send();
}

load_newspaper("newspaper.np");
