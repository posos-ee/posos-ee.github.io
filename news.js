function add_article(title, content, imgs) {
	var detail = document.createElement("detail");

	document.querySelector("main").appendChild(detail);
}

function load_newspaper(url) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, false);

	xhr.onload = function (e) {
		var data = e.target.responseXML;
	}
	
	xhr.send();
}

load_newspaper("newspaper.np");
