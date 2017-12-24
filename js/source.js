if(window.fetch) {
	fetch("https://raw.githubusercontent.com/openwisp/netjson-templates/master/templates.json").then(function(response) {
		return response.json();
	}).then(function(data) {
		for(var i=0; i<data.length; i++) {
			var card = document.createElement('div');
			card.setAttribute('class', 'card')
			var template_name = document.createElement('span');
			template_name.setAttribute('class', 'i');
			template_name.textContent = 'Name: ' + data[i].name;
			var description = document.createElement('span');
			description.setAttribute('class', 'i');
			description.textContent = 'Description: ' + data[i].short_description;
			var link = document.createElement('span');
			link.innerHTML = 'Link: <a href="https://raw.githubusercontent.com/openwisp/netjson-templates/master/templates/' + data[i].file_name + '">' + data[i].file_name + '</a>';
			card.appendChild(template_name);
			card.appendChild(description);
			card.appendChild(link);
			document.getElementById('content').appendChild(card);
		}
		document.getElementById('load').className = 'invisible';
	});
}
