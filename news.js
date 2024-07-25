function load_newspaper(url) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, false);

	xhr.onload = function (e) {
		// Show dialog
		alert(e.target.responseText);
	}
	
	xhr.send();
}

load_newspaper("newspaper.np");
