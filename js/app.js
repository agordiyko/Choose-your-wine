let select = document.getElementById('select');
let options = document.querySelectorAll('.content__option');
let result = document.querySelector('.result');
let hold = document.querySelector('.hold');
let resultList = document.querySelector('.result__list');
const foodDescription = document.querySelector('.content__info');






function createItem(name, sort) {
	for (let i = 0; i < 1; i++) {
		//Нужно эту часть доработать. несколько раз создается контейнер аккордеон
		let resultItem = document.createElement('li');
		resultItem.classList.add('result__item');
		resultItem.classList.add('accordeon');
		// resultItem.innerHTML = `${item}`;
		resultList.append(resultItem);
		foodDescription.classList.add('active');
		resultItem.innerHTML = returnAccordeon(name, sort);
	}
}

let WINE_ID_MIN = 1;
let WINE_ID_MAX = 11;

const iterateAccordeonLink = function () {
	const accordeon = document.querySelector('.accordeon');
	const accordeonContent = document.createElement('div');
	accordeonContent.classList.add('accordeon__content');
	accordeonContent.setAttribute('aria-hidden', true);
	accordeon.appendChild(accordeonContent);
	console.log(accordeonContent);
	for (let wine of wineSorts) {
		if (wine.id >= WINE_ID_MIN && wine.id <= WINE_ID_MAX) {
			let row = document.createElement('li');
			row.innerHTML = `
			<a href="#" class="accordeon__link">${wine.name}</a>
			`
			accordeonContent.appendChild(row);
		};
	}
}

let returnAccordeon = function (name, sort) {
	return `		
			<button class="accordeon__control" aria-expanded="false">
				<span class="accordeon__title">${name}</span>
				<span class="accordeon__icon"></span>
			</button>
			${iterateAccordeonLink()}
		`
		
}


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



select.addEventListener('change', () => {
	
	let data = document.getElementById('select').value;


	if (data === "red-meat") {
		showData(); 
		createItem(wines2[0]['name']);
		createItem(wines2[1]['name']);
		createItem(wines2[2]['name']);
		foodDescription.innerHTML = foodSorts[0].name;
		createAccordeons();
		return;
	} 
	if (data === "salted-smoked-meat") {
		showData();
		createItem((wines.id1.name), (wineSorts[0].name));
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id6.name);
		createItem(wines.id8.name);
		foodDescription.innerHTML = foodSorts[1].name;
		createAccordeons();
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
		foodDescription.innerHTML = foodSorts[2].name;
		createAccordeons();
		return;
	} 
	if (data === "crustacean-mollusc") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id5.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		foodDescription.innerHTML = foodSorts[3].name;
		createAccordeons();
		return;
	}  
	if (data === "fish") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id6.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		foodDescription.innerHTML = foodSorts[4].name;
		createAccordeons();
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
		foodDescription.innerHTML = foodSorts[5].name;
		createAccordeons();
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
		foodDescription.innerHTML = foodSorts[6].name;
		createAccordeons();
		return;
	}  
	if (data === "vegetables-greens") {
		showData();
		createItem(wines.id4.name);
		createItem(wines.id7.name);
		createItem(wines.id8.name);
		foodDescription.innerHTML = foodSorts[7].name;
		createAccordeons();
		return;
	} 
	if (data === "exotic-spices") {
		showData();
		createItem(wines.id2.name);
		createItem(wines.id3.name);
		createItem(wines.id5.name);
		createItem(wines.id8.name);
		createItem(wines.id9.name);
		foodDescription.innerHTML = foodSorts[8].name;
		createAccordeons();
		return;
	} 
	if (data === "dessert") {
		showData();
		createItem(wines.id5.name);
		createItem(wines.id9.name);
		foodDescription.innerHTML = foodSorts[9].name;
		createAccordeons();
		return;
	}
}
)

const createAccordeons = () => {
	const accordeons = document.querySelectorAll('.accordeon');
	accordeons.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordeon__control');
			const content = self.querySelector('.accordeon__content');
			
			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
};


