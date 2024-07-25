function add_article(title, content) {
	var detail = document.createElement("detail");

	var summary = document.createElement("summary");

	summary.innerText = title.toString();

	detail.appendChild(summary);

	var text = document.createElement("p");

	text.innerText = content.toString();

	detail.appendChild(text);

	document.querySelector("main section:first-child").appendChild(detail);
}

function load_newspaper(url) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", url, false);

	xhr.onload = function (e) {
		var data = JSON.parse(e.target.responseText);

		for (var i in data) {
			add_article(decodeURIComponent(atob(data[i].title)), decodeURIComponent(atob(data[i].content)));
		}
	}
	
	xhr.send();
}

load_newspaper("newspaper.np");
