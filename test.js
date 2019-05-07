var client_names = [];
var client_pictures = [];
var client_information = [];

var regex = /(["'])(?:(?=(\\?))\2.)*?(\1)/g;

function get_names() {
	var doc = document.getElementById('client_names').textContent;
	var names = doc.match(regex);

	names.forEach((element) => {
		client_names.push(element.slice(1, element.length - 1));
	});
}

function get_pictures() {
	var doc = document.getElementById('client_pictures').innerHTML;

	var pictures = doc.match(regex);

	pictures.forEach((element) => {
		client_pictures.push(element.slice(1, element.length - 1));
	});
}

function get_information() {
	var doc = document.getElementById('client_information').textContent;
	var information = doc.match(regex);

	information.forEach((element) => {
		client_information.push(element.slice(1, element.length - 1));
	});
}

get_names();
get_information();
get_pictures();

var html = '';

function generate() {
	var body = document.getElementById('clients');

	var col1 = '<div class="col1">';
	var col2 = '<div class="col2">';
	var col3 = '<div class="col3">';

	for (var i = 0; i < client_names.length; i++) {
		var client_name_div = '';
		var client_picture_div = '';
		var client_information_div = '';

		client_name_div = client_name_div.concat('<div class="client_name">', client_names[i], '</div>');
		client_picture_div = client_pictures[i];
		client_information_div = client_information_div.concat(
			'<div class="client_information" id="',
			i,
			'">',
			client_information[i],
			'</div>'
		);

		function combine(column) {
			column = column.concat(
				'<div class="client" onclick=expand("',
				i,
				'")>',
				client_name_div,
				client_picture_div,
				client_information_div,
				'</div>'
			);

			return column;
		}

		if (i == 0 || i % 3 == 0) {
			col1 = combine(col1);
		} else if (i % 3 == 1) {
			col2 = combine(col2);
		} else if (i % 3 == 2) {
			col3 = combine(col3);
		}
	}

	col1 = col1.concat('</div>');
	col2 = col2.concat('</div>');
	col3 = col3.concat('</div>');

	body.innerHTML = ''.concat(col1, col2, col3);
}

generate();
