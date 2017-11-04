var modal = document.getElementById('modalWindow'),
	openBut = document.getElementsByClassName('button')[0],
	closeBut = document.getElementsByClassName('button-close')[0],
	showBut = document.getElementsByClassName('button-load')[0],
	hiddenWorks = document.getElementsByClassName('hidden-work')[0];


function showModal () {
	modal.style.display = 'initial';
}

function closeModal () {
	modal.style.display = 'none';
}
function showWorks() {
	hiddenWorks.style.display = 'inline-block';
}

	openBut.addEventListener('click', showModal);
	closeBut.addEventListener('click', closeModal);

	showBut.addEventListener('click', showWorks);
	