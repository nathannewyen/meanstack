$('#house_details').hide();

let divArr = [];
for (var i = 0; i < $('img').length; i++) {
	divArr.push($('img')[i].id);
	document.getElementById(divArr[i]).addEventListener('click', displayInfo);
}

function displayInfo() {
	$('#house_details').show();

	let house_name = document.getElementById('house_name');
	let house_words = document.getElementById('house_words');
	let house_title = document.getElementById('house_title');

	fetch(`https://anapioficeandfire.com/api/houses/${this.id}/`)
		.then((response) => response.json())
		.then(({ name, words, titles }) => {
			house_name.textContent = `Name: ${name}`;
			house_words.textContent = `Words: ${words}`;
			house_title.textContent = `Words: ${titles}`;
		});
}
