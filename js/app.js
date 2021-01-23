let select = document.getElementById('select');
let options = document.querySelectorAll('.content__option');
let result = document.querySelector('.result');
let hold = document.querySelector('.hold');
let resultList = document.querySelector(".result__list");

function removeResult() {
	result.remove();
};
function createResult() {
	result = document.createElement('div');
	result.classList.add('result');
	hold.prepend(result);
};
function removeResultList() {
	resultList.remove();
};
function createResultList() {
	resultList = document.createElement('ul');
	resultList.classList.add('result__list');
	result.prepend(resultList);
};

function createTitle() {
	let resultTitle = document.createElement('h3');
	resultTitle.classList.add('result__title');
	resultTitle.innerHTML = 'Подходящее для вашего продукта вино:';
	result.prepend(resultTitle);
};
function removeTitle() {
	resultTitle.remove();
};


select.addEventListener('change', () => {

	let data = document.getElementById('select').value;


	if (data === "red-meat") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id1.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
	} else if (data === "salted-smoked-meat") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id1.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id6.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
	} else if (data === "white-meat") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id6.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
	} else if (data === "crustacean-mollusc") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id7.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
	} else if (data === "fish") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id6.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id7.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
	} else if (data === "hard-cheese") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id1.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id9.name;
			resultList.append(resultItem);
		}
	} else if (data === "soft-cheese") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id6.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id7.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id9.name;
			resultList.append(resultItem);
		}
	} else if (data === "vegetables-greens") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id4.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id7.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
	} else if (data === "exotic-spices") {
		removeResult()
		createResult();
		removeResultList();
		createResultList();
		createTitle();
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id2.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id3.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id8.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id9.name;
			resultList.append(resultItem);
		}
	} else if (data === "dessert") {
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id5.name;
			resultList.append(resultItem);
		}
		for (let i = 1; i < 2; i++) {
			let resultItem = document.createElement('li');
			resultItem.classList.add('result__item');
			resultItem.innerHTML = wines.id9.name;
			resultList.append(resultItem);
		}
	}


}
)

