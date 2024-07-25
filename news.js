function add_article(title, content, imgs) {
	var detail = document.createElement("detail");

	var summary = document.createElement("summary");

	suumary.innerText = title.toString();

	detail.appendChild(summary);

	document.querySelector("main").appendChild(detail);
}

function load_newspaper(url) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, false);

	xhr.onload = function (e) {
		var data = e.target.responseXML;

		for (var i = 0; i < data.getElementsByTagName("post").length; i++) {
			add_article(data.getElementsByTagName("post")[i].children[0].innerText);
		}
	}
	
	xhr.send();
}

load_newspaper("newspaper.np");
