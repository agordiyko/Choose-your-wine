let select = document.getElementById('select');
let options = document.querySelectorAll('.content__option');
let result = document.querySelector('.result');
let hold = document.querySelector('.hold');
let resultList = document.querySelector('.result__list');

function removeTitle() {
	resultTitle.remove();
};

function showData() {
	result.remove();

	result = document.createElement('div');
	result.classList.add('result');
	hold.prepend(result);

	resultList.remove();
	
	resultList = document.createElement('ul');
	resultList.classList.add('result__list');
	result.prepend(resultList);

	let resultTitle = document.createElement('h3');
	resultTitle.classList.add('result__title');
	resultTitle.innerHTML = 'Подходящее для вашего продукта вино:';
	result.prepend(resultTitle);
}

function createItem(item) {
	for (let i = 1; i < 2; i++) {
		let resultItem = document.createElement('li');
		resultItem.classList.add('result__item');
		resultItem.innerHTML = `${item}`;
		resultList.append(resultItem);
	}
}

select.addEventListener('change', () => {

	let data = document.getElementById('select').value;


	if (data === "red-meat") {
		showData(); 
		createItem(wines.id1.name);
		console.log(fullBodiedRed);
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		return;
	} 
	if (data === "salted-smoked-meat") {
		showData();
		createItem(wines.id1.name);
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id6.name);
		createItem(wines.id8.name);
		return;
	} 
	if (data === "white-meat") {
		showData();
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id6.name);
		createItem(wines.id8.name);
		return;
	} 
	if (data === "crustacean-mollusc") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		return;
	}  
	if (data === "fish") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id6.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		return;
	} 
	if (data === "hard-cheese") {
		showData();
		createItem(wines.id1.name);
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id8.name);
		createItem(wines.id9.name);
		return;
	} 
	if (data === "soft-cheese") {
		showData();
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id6.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		createItem(wines.id9.name);
		return;
	}  
	if (data === "vegetables-greens") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		return;
	} 
	if (data === "exotic-spices") {
		showData();
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id5.name);
		createItem(wines.id8.name);
		createItem(wines.id9.name);
		return;
	} 
	if (data === "dessert") {
		showData();
		createItem(wines.id5.name);
		createItem(wines.id9.name);
		return;
	}
}
)

